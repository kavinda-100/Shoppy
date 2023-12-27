import { BrowserRouter, Routes, Route } from "react-router-dom";
import LatOut from "./Components/LayOut";
import HelpAndContact from "./Pages/HelpAndContact";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Missing from "./Pages/Missing";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";

//react query imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// contexts providers imports
import ProductsProvider from "./Context/ProductsProvider";
import CategoryProvider from "./Context/CategoryProvider";
import CartProvider from "./Context/CartProvider";
import UserProvider from "./Context/UserProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <CategoryProvider>
            <CartProvider>
            <UserProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LatOut />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="store" element={<Store />} />
                    <Route path="store/product/:id" element={<Product />} />
                    <Route path="help" element={<HelpAndContact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="profile" element={<Profile />} />
                  </Route>
                  <Route path="sign-in" element={<SignIn />} />
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="*" element={<Missing />} />
                </Routes>
              </BrowserRouter>
              </UserProvider>
            </CartProvider>
          </CategoryProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
