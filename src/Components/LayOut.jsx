import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <>
      <main className="w-full h-screen">
        <Nav />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default LayOut;
