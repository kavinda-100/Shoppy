import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { UserContext } from "../Context/UserProvider";

// import sweeralert2
import Swal from "sweetalert2";

const ProductCard = ({ product, url }) => {
  // get addToCart function from CartContext
  const { addToCart } = useContext(CartContext);
  // get isSingIn from UserContext
  const { isSingIn } = useContext(UserContext);
  // get rating from product
  const value = product.rating;

  // handle addToCart button click
  const handleAddToCart = () => {
    if (isSingIn) {
      addToCart(product, product.id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product.title} added to cart`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must sign in first!",
        footer: '<a href="sign-in">please Sign In</a>'
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-[390px] h-[400px] p-3 bg-white-primary rounded-md shadow-md group">
        {/* navigation icons */}
        <div className="hidden group-hover:flex absolute z-10 top-1 left-1 flex-col bg-white-primary w-[70px] h-[65px] shadow-lg rounded-md">
          <Link
            to={url}
            className="flex text-white bg-red-500 hover:text-red-500 hover:font-bold hover:bg-white hover:rounded-t-md w-full h-1/2 items-center justify-center cursor-pointer"
          >
            <p className="font-semibold font-montserrat">view</p>
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex hover:text-white hover:bg-red-500 hover:rounded-b-md w-full h-1/2 items-center justify-center cursor-pointer"
          >
            <p className="font-semibold font-montserrat">Add To Cart</p>
          </button>
        </div>
        {/* product */}
        <div className="w-full h-[300px]">
          <img
            src={product.images[0] || "https://placehold.co/400"}
            alt={product.title}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div className="w-full h-[100px]">
          <h3 className="text-xl font-bold font-palanquin text-slate-500">
            {product.title.length > 23
              ? product.title.slice(0, 23).concat("...")
              : product.title}
            <span className="text-black-secondary"> |</span> {product.brand}
          </h3>
          <p className="text-lg font-semibold font-montserrat text-black-primary">
            {product.category}
          </p>
          <p className="text-lg font-bold font-montserrat leading-normal text-slate-gray">
            ${product.price}
          </p>
          <div className="flex justify-start items-center gap-3 font-palanquin text-xl">
            <Rating name="read-only" value={value} readOnly />
            <p>{product.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
