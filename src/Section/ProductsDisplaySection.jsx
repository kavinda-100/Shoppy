import {useContext } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import ProductCard from "../Components/ProductCard";

const ProductsDisplaySection = () => {
  const { products, isPending, error } = useContext(ProductsContext);

  return (
    <>
      {isPending && <div className="text-4xl font-palanquin text-slate-gray text-center m-3">Loading...</div>}
      {error && <div className="text-2xl font-montserrat text-gray-600">{error.message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 items-center justify-center">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} url={`store/product/${product.id}`}/>
          ))
        }
        {
            !products && <div className="text-2xl font-montserrat text-gray-600 text-center m-5">No Products</div>
        }
      </div>    
    </>
  );
};

export default ProductsDisplaySection;
