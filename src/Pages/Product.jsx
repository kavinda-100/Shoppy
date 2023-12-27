import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import Rating from "@mui/material/Rating";

const Product = () => {
  const { id } = useParams();
  const { productData } = useContext(ProductsContext);

  // filter the product based on the id
  const Product = productData?.products.find(
    (product) => product.id === Number(id)
  );
  console.log(Product);

  // const value = Product.rating;

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full h-auto flex justify-center items-center">
      <section className="container my-5">
        {/* back to home and store buttons */}
        <div className="flex justify-start items-center gap-4 m-5">
          {/* back to home button */}
          <Link
            to="/"
            className="flex justify-center items-center gap-2 bg-white-primary hover:bg-slate-500 hover:text-white-primary shadow-lg font-semibold font-montserrat rounded-md px-3 py-2"
          >
            {" "}
            Back to home
          </Link>
          {/* back to store button */}
          <Link
            to="/store"
            className="flex justify-center items-center gap-2 bg-white-primary hover:bg-slate-500 hover:text-white-primary shadow-lg font-semibold font-montserrat rounded-md px-3 py-2"
          >
            Back to store
          </Link>
        </div>
        {Product && (
          <div className="flex flex-col md:flex-row gap-4 p-3 lg:p-4 justify-center items-center my-10 lg:gap-9 lg:w-full md:h-auto md:my-6">
            {/* image */}
            <div className="w-full max-w-[390px] max-h-[390px] md:w-1/2 md:h-auto">
              <img
                src={Product.images[0] || "https://placehold.co/400"}
                alt={Product.title}
                className="w-full max-h-[390px] md:max-h-[420px] object-contain p-2"
              />
            </div>
            {/* title, price, description, ect... */}
            <div className="w-full max-w-[390px] h-auto md:w-1/2 md:h-auto md:max-h-[420px]">
              {/* title and brand */}
              <div className="flex items-center gap-3 my-3 md:my-4">
                <h1 className="text-2xl font-bold font-montserrat">
                  {Product.title}
                </h1>
                <h1 className="text-xl font-semibold font-montserrat">
                  <span className="text-slate-gray">|</span> {Product.brand}
                </h1>
                {/* price and discountPercentage */}
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold font-montserrat">
                  ${Product.price}
                </h1>
                <h1 className="text-xl font-bold font-montserrat text-green-500">
                  <span className="text-slate-gray">|</span>{" "}
                  {Product.discountPercentage} % off
                </h1>
              </div>
              {/* description */}
              <p className="text-gray-500 text-lg leading-normal font-montserrat">
                {Product.description}
              </p>
              {/* stock */}
              <p className="text-lg font-semibold font-montserrat text-black-primary my-3 md:my-4">
                {Product.stock}{" "}
                <span className="text-lg font-palanquin">Available</span>
              </p>
              {/* ratings */}
              <div className="flex justify-start items-center gap-3 font-palanquin text-xl">
                <Rating name="read-only" value={4} readOnly />
                {/* <p>{Product.rating}</p> */}
              </div>
              {/* buttons */}
              <div className="flex justify-start xl:justify-end items-center gap-4 my-3">
                {/* add to cart button */}
                <button className=" bg-white-primary shadow-lg font-semibold font-montserrat rounded-md px-4 py-4 hover:bg-slate-500 hover:text-white-primary">
                  Add to cart
                </button>
                {/* buy now button */}
                <button className=" bg-white-primary shadow-lg font-semibold font-montserrat rounded-md px-4 py-4 hover:bg-slate-500 hover:text-white-primary">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        )}
        {!Product && (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">Product not found</h1>
          </div>
        )}
      </section>
    </section>
  );
};

export default Product;
