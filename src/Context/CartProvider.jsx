import { createContext, useEffect, useState } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // create cart state
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // local storage functions
  const saveLocalStorageCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // add to cart function
  const addToCart = (product, id) => {
    // new product
    const newProduct = { ...product, amount: 1 };

    // check if product already exists in cart
    const productExists = cart.find((item) => item.id === Number(id));

    // if product exists, increase amount by 1
    if (productExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === Number(id)) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, newProduct]);
    }
    saveLocalStorageCart(cart);
  };

  // remove item function
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== Number(id));
    setCart(updatedCart);
    saveLocalStorageCart(cart);
  };

  // increase amount function
  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    saveLocalStorageCart(cart);
  };

  // decrease amount function
  const decreaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.amount !== 0));
    saveLocalStorageCart(cart);
  };

  // clear cart function
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Amount of items in cart
  useEffect(() => {
    const amount = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // Total Price
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  // values
  const values = {
    cart,
    addToCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    clearCart,
    itemAmount,
    totalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
