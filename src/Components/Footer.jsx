import { Link } from "react-router-dom";
import { footerData } from "../Constens";
import { useEffect } from "react";

const Footer = () => {
  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // get current year
  const year = new Date().getFullYear();
  return (
    <section className="w-full h-auto mt-7 bg-black-primary text-white-primary">
      <div className="container flex justify-between items-center px-2 lg:px-4">
        <h1 className="justify-start font-bold text-3xl font-montserrat py-3 lg:py-5">
          Shoppy
        </h1>

        <button
          onClick={scrollToTop}
          className="justify-end font-semibold text-md font-montserrat p-3 lg:p-5 bg-slate-600 hover:bg-slate-500 rounded-md shadow-lg cursor-pointer"
        >
          Scroll To Top
        </button>
      </div>
      {/* footer links */}
      <div className="max-w-[1024px] mx-auto my-3 lg:my-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5">
          {footerData.map((item) => (
            <div key={item.id} className="w-full h-auto flex flex-col gap-2 mb-3 lg:mb-5">
              <h1 className="font-bold text-xl font-montserrat text-white-primary mb-2 lg:mb-4">
                {item.title}
              </h1>
              {item.links.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="font-semibold text-md font-montserrat hover:underline cursor-pointer text-yellow-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div>
        <p className="text-center text-white-primary font-montserrat text-md py-3 lg:py-5">
          © {year} Shoppy. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
