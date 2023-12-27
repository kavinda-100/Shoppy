import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartProvider";
import { Link } from "react-router-dom";

// import sweeralert2
import Swal from "sweetalert2";

const Cart = () => {
  // get cart from CartContext
  const {
    cart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    clearCart,
    itemAmount,
    totalPrice,
  } = useContext(CartContext);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // handle clear cart
  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgba(100,116,139,1)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cleared!", "Your cart has been cleared.", "success");
      }
    });
  };

  // handel confirm checkout
  const handleConfirmCheckout = () => {
  if(cart.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Cart is empty",
      text: "Please add some items to your cart",
      confirmButtonColor: "rgba(100,116,139,1)",
    })
   }
   else {
      Swal.fire({
        icon: "success",
        title: "Checkout success",
        text: "Thank you for shopping with us",
        confirmButtonColor: "rgba(100,116,139,1)",
      })
   }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center font-montserrat mt-10 mb-5">
        Cart
      </h1>
      <section className="container flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-auto md:w-2/3">
          <div className="w-full max-h-[600px] flex flex-col justify-center items-center gap-4 lg:gap-9 p-5 overflow-y-auto">
            {cart.map((item, index) => (
              <div
                key={index}
                className="w-full h-[60px] border-b-2 border-gray-300 flex justify-between items-center gap-3 lg:gap-4"
              >
                <div className="flex gap-3 justify-center items-center">
                  <img
                    className="w-[50px] h-[50px] object-contain"
                    src={item.images[0]}
                    alt={item.title}
                  />
                  <Link
                    className="text-sm lg:text-base font-semibold text-gray-700 hover:text-gray-900 hover:underline"
                    to={`/store/product/${item.id}`}
                  >
                    {item.title.length > 20
                      ? item.title.slice(0, 20).concat("...")
                      : item.title}
                  </Link>
                </div>

                <div className="flex gap-5 justify-evenly items-center">
                  <span className="text-md lg:text-lg font-semibold font-montserrat text-gray-700">
                    ${item.price}
                  </span>
                  <div className="flex flex-row border border-slate-gray p-2 justify-evenly items-center gap-3 rounded-md font-montserrat text-md lg:text-lg font-bold">
                    <button
                      onClick={() => increaseAmount(item.id)}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      +
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => decreaseAmount(item.id)}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-md lg:text-lg font-bold text-gray-700 hover:bg-red-500 hover:text-white mx-2 border border-slate-gray p-2 rounded-md"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            {cart.length === 0 || cart === undefined && (
              <h1 className="text-md lg:text-lg text-slate-gray font-montserrat font-bold leading-normal">
                Cart is empty
              </h1>
            )}
          </div>
        </div>

        <div className="w-full h-auto md:w-1/3 p-5 xl:mx-7">
          <h1 className="text-2xl font-semibold text-slate-gray font-montserrat py-5 text-center">
            More Details
          </h1>
          <div className="w-full flex-col items-center p-5">
            <h1 className="text-lg font-semibold text-slate-gray font-montserrat border-b-2 border-gray-300 py-5">
              Total Price $
              <span className="text-lg text-slate-700"> {totalPrice}</span>
            </h1>
            <h1 className="text-lg font-semibold text-slate-gray font-montserrat border-b-2 border-gray-300 py-5">
              Total Items -
              <span className="text-lg text-slate-700"> {itemAmount}</span>
            </h1>
            <div className="flex flex-row justify-center items-center py-5 gap-5">
              <button 
              onClick={handleConfirmCheckout}
              className=" bg-white-primary shadow-lg font-semibold font-montserrat rounded-md px-4 py-4 hover:bg-slate-500 hover:text-white-primary">
                checkout
              </button>
              <button
                onClick={handleClearCart}
                className=" bg-white-primary shadow-lg font-semibold font-montserrat rounded-md px-4 py-4 hover:bg-red-500 hover:text-white-primary"
              >
                clear cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
