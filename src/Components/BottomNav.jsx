import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavAndCategoriesList, subCategories, categories } from "../Constens";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

// import contexts
import { useContext } from "react";
import { CategoryContext } from "../Context/CategoryProvider";

const BottomNav = () => {
  const navigate = useNavigate();
  // get context
  const { setCategoryHandler } = useContext(CategoryContext);
  // menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateHandler = (item) => {
    setCategoryHandler(item);
    navigate("/store");
  };
  return (
    <section className="h-[60px] flex flex-row justify-evenly items-center">
      <div>
        <Tooltip title="Categories">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              color: "black",
              fontSize: "2rem",
            }}
          >
            <MenuIcon
              sx={{
                width: "2rem",
                height: "2rem",
              }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{
                cursor: "none",
                color: "rgba(109, 109, 109, 1)",
                fontFamily: "Montserrat",
              }}
            >
              Categories & Products
            </MenuItem>
            {categories.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "1rem",
                  width: "200px",
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
        </Tooltip>
      </div>
      <h1 className="text-3xl text-slate-gray">|</h1>
      {/* navigation links */}
      <div className="flex justify-center items-center gap-7 text-black-secondary">
        {NavAndCategoriesList.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="text-xl font-montserrat font-semibold"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <h1 className="text-3xl text-slate-gray">|</h1>
      <h1 className="text-2xl text-black-secondary sm:hidden md:flex">
        Categories & Products
      </h1>
      <h1 className="text-3xl text-slate-gray sm:hidden md:hidden lg:hidden xl:flex">
        |
      </h1>
      {/* category list */}
      <div className="flex justify-center items-center gap-5 sm:hidden md:hidden lg:hidden xl:flex">
        {subCategories.map((item) => (
          <h3
            key={item.id}
            className="text-lg font-montserrat font-semibold w-full text-center text-black-secondary"
          >
            {item.name}
          </h3>
        ))}
      </div>
    </section>
  );
};

export default BottomNav;
