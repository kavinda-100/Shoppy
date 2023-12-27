import { createContext, useContext, useState, useEffect } from "react";
import { ProductsContext } from "./ProductsProvider";

// create context
export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  // get products from ProductsContext
  const { productData } = useContext(ProductsContext);

  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("all");
  const [categoryAmount, setCategoryAmount] = useState(8);

  // filter category data
  const filterCategoryData = () => {
    if (category === "all") {
      setCategoryData(productData?.products.slice(0, categoryAmount));
    } else {
      setCategoryData(
        productData?.products
          .filter((product) => product.category === category)
          .slice(0, categoryAmount)
      );
    }
  };
  // set category
  useEffect(() => {
    filterCategoryData();

  }, [category, productData, categoryAmount]);

  // console.log(categoryData);
  // set category
  const setCategoryHandler = (category) => {
    setCategory(category);
  };
  // increase category amount by 8
  const increaseCategoryAmount = () => {
    setCategoryAmount((pre) => pre + 8);
  };
  // decrease category amount by 8
  const decreaseCategoryAmount = () => {
    if (categoryAmount === 8) return;
    setCategoryAmount((pre) => pre - 8);
  };

  const values = {
    categoryData,
    setCategoryHandler,
    increaseCategoryAmount,
    decreaseCategoryAmount,
    category,
    categoryAmount,
  };
  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
