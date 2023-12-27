import { categories } from "../Constens";
import ProductCard from "../Components/ProductCard";
import LoadMoreAndLoadLessButton from "../Components/LoadMoreAndLoadLessButton";
// Import context
import { useContext, useEffect } from "react";
import { CategoryContext } from "../Context/CategoryProvider";
import { useState } from "react";
// MUI components
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Store = () => {
  // get categoryData from CategoryContext
  const {
    category,
    categoryData,
    setCategoryHandler,
    increaseCategoryAmount,
    decreaseCategoryAmount,
  } = useContext(CategoryContext);

  // menu
  const [anchorElFour, setAnchorElFour] = useState(null);
  const open = Boolean(anchorElFour);
  const handleClick = (event) => {
    setAnchorElFour(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElFour(null);
  };

  const navigateHandler = (item) => {
    setCategoryHandler(item);
  };

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="text-center text-4xl font-bold font-montserrat text-slate-gray">
          Store
        </h1>
        <div className="hidden lg:flex flex-wrap gap-3 my-5">
          {categories.map((categoryItem) => (
            <button
              onClick={() => setCategoryHandler(categoryItem.category)}
              key={categoryItem.id}
              className={`p-3 bg-white-primary text-black-primary shadow-md rounded-lg font-semibold font-montserrat ${
                categoryItem.category === category
                  ? `border border-gray-700`
                  : null
              }`}
            >
              {categoryItem.name}
            </button>
          ))}
        </div>
        <div className="flex flex-row lg:hidden justify-start items-center">
          <Button
            id="basic-button-four"
            aria-controls={open ? "basic-menu-four" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              color: "black",
              fontSize: "1rem",
            }}
          >
            <MenuIcon
              sx={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </Button>
          <Menu
            id="basic-menu-four"
            anchorEl={anchorElFour}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-four",
            }}
          >
            {categories.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "1rem",
                  width: "200px",
                  backgroundColor: item.category === category ? "gray" : null,
                }}
                key={item.id}
                onClick={handleClose}
              >
                <div onClick={() => navigateHandler(item.category)}>
                  {item.name}
                </div>
              </MenuItem>
            ))}
          </Menu>
          <h2 className="text-xl font-montserrat font-semibold text-slate-gray">
            Select Category
          </h2>
        </div>
        <div className="m-5">
          <h3 className="text-lg font-montserrat font-semibold text-black-primary">
          Category:
          <span className="text-lg font-montserrat text-slate-gray">{" "}{category}</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 items-center justify-center">
          {categoryData &&
            categoryData.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                url={`product/${product.id}`}
              />
            ))}
          {!categoryData && (
            <div className="text-2xl font-montserrat text-gray-600 text-center m-5">
              No Products
            </div>
          )}
        </div>
        <div className="my-5">
          <LoadMoreAndLoadLessButton
            increaseFunc={() => increaseCategoryAmount()}
            decreaseFunc={() => decreaseCategoryAmount()}
            productAmount={categoryData?.length}
          />
        </div>
      </section>
    </>
  );
};

export default Store;
