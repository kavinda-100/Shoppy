import { createContext, useEffect, useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

// create context
export const ProductsContext = createContext();

// create provider
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productAmount, setProductAmount] = useState(8);

  // create axios function to fetch data
  const fetchProductsData = async () => {
    const { data } = await Axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    return data;
  };

  // fetch data using react-query
  const {
    data: productData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
  });

  // filter 8 products at a time
  useEffect(() => {
    if (productData) setProducts(productData?.products.slice(0, productAmount));
  }, [productAmount, productData]);

  // increase product amount by 8
  const increaseProductAmount = () => {
    setProductAmount((pre) => pre + 8);
  };
  // decrease product amount by 8
  const decreaseProductAmount = () => {
    if (productAmount === 8) return;
    setProductAmount((pre) => pre - 8);
  };

  const values = {
    productData,
    products,
    productAmount,
    increaseProductAmount,
    decreaseProductAmount,
    isPending,
    error,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
