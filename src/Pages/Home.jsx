import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../Section/HeroSection";
import HorizontalLine from "../Components/HorizontalLine";
import ProductsDisplaySection from "../Section/ProductsDisplaySection";
import LoadMoreAndLoadLessButton from "../Components/LoadMoreAndLoadLessButton";

// Import Contexts
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsProvider";

const Home = () => {
  const { increaseProductAmount, products, decreaseProductAmount } = useContext(ProductsContext);
  return (
    <section className="bg-white-primary min-height top-[60px] md:top-[120px]">
      <section>
        <HeroSection />
      </section>
      <section className="container">
        <div className="flex justify-center items-center m-3 lg:m-5">
          <h1 className="text-xl lg:text-3xl font-bold font-palanquin text-slate-gray uppercase lg:mt-5">
            Latest Products
          </h1>
        </div>
        <div className="w-full h-auto">
          <ProductsDisplaySection />
        </div>
        <div className="my-5">
          <LoadMoreAndLoadLessButton 
          increaseFunc={() => increaseProductAmount()}
          decreaseFunc={() => decreaseProductAmount()}
          productAmount={products?.length}
          />
        </div>
      </section>
      <section className="container">
        <div className="flex justify-center items-center">
          <Link 
          to="/store"
          className="bg-white-primary text-black-primary font-palanquin font-bold text-lg p-5 rounded-md shadow-xl hover:bg-slate-500 hover:text-white-primary">View Our Store</Link>
        </div>
      </section>
    </section>
  );
};

export default Home;
