import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MobileMenuList, avatarMenuList } from "../Constens";
import Swal from "sweetalert2";
// MUI imports
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import { StyledBadge } from "../Components/MUI/MuiStyles";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SvgIcon } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

// context
import { CartContext } from "../Context/CartProvider";
import { UserContext } from "../Context/UserProvider";

const UpNav = () => {
  // get totalItems from CartContext
  const { itemAmount } = useContext(CartContext);
  // singOutFunction from UserContext
  const { singOutFunction } = useContext(UserContext);

  const navigate = useNavigate();
  const [anchorElTwo, setAnchorElTwo] = useState(null);
  const openTwo = Boolean(anchorElTwo);
  const handleClickTwo = (event) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  const [anchorElThree, setAnchorElThree] = useState(null);
  const openThree = Boolean(anchorElThree);
  const handleClickThree = (event) => {
    setAnchorElThree(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  const NavigateToCart = () => {
    navigate("/cart");
  };

  // singOutFunction
  const handleSingOut = () => {
    singOutFunction();
    Swal.fire({
      icon: "success",
      title: "Sing Out",
      text: "Sing Out Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      <section className="h-[60px] flex flex-row justify-evenly items-center">
        <Link
          to="/"
          className="text-3xl text-black-secondary font-palanquin font-bold leading-normal"
        >
          Shoppy
        </Link>

        <div className="w-[40%] h-[30px] hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full border-2 border-black-secondary rounded-md p-6 text-lg leading-normal text-black-primary font-palanquin outline-none bg-white-400 shadow-sm"
          />
        </div>

        <div className="flex flex-row justify-evenly items-center gap-8 text-lg">
          <NavLink
            to="sign-up"
            className="text-lg font-montserrat font-semibold hidden md:flex"
          >
            SignUp
          </NavLink>
          <NavLink
            to="sign-in"
            className="text-lg font-montserrat font-semibold hidden md:flex"
          >
            SignIn
          </NavLink>
          <Tooltip title="Go To Cart" placement="top">
            <div
              onClick={() => NavigateToCart()}
              className="relative flex flex-row justify-center items-center cursor-pointer"
            >
              <ShoppingCartIcon />
              <span className="absolute -bottom-3 left-3 bg-red-600 py-1 px-2 text-white rounded-full text-sm border border-white-primary">
                {itemAmount}
              </span>
            </div>
          </Tooltip>
          <Tooltip title="Mail" placement="top">
            <StyledBadge
              badgeContent={4}
              color="error"
              sx={{
                cursor: "pointer",
              }}
            >
              <MailIcon />
            </StyledBadge>
          </Tooltip>

          <div className="hidden md:flex">
            <Button
              id="basic-button-2"
              aria-controls={openTwo ? "basic-menu-2" : undefined}
              aria-haspopup="true"
              aria-expanded={openTwo ? "true" : undefined}
              onClick={handleClickTwo}
              sx={{
                cursor: "pointer",
                color: "black",
                fontSize: "2rem",
              }}
            >
              <Avatar>N</Avatar>
            </Button>
            <Menu
              id="basic-menu-2"
              anchorEl={anchorElTwo}
              open={openTwo}
              onClose={handleCloseTwo}
              MenuListProps={{
                "aria-labelledby": "basic-button-2",
              }}
            >
              {avatarMenuList.map((item) => {
                return (
                  <MenuItem
                    key={item.name}
                    sx={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "14px",
                      width: "150px",
                      display: "flex",
                      gap: "10px",
                    }}
                    onClick={handleCloseTwo}
                  >
                    <SvgIcon component={item.icon} />
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </MenuItem>
                );
              })}
              <MenuItem
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "14px",
                  width: "150px",
                  display: "flex",
                  gap: "10px",
                }}
                onClick={handleCloseTwo}
              >
                <button
                  onClick={handleSingOut}
                  className="flex justify-center items-center gap-[10px]"
                >
                  <LogoutIcon />
                  <p>Logout</p>
                </button>
              </MenuItem>
            </Menu>
          </div>

          <div className="block md:hidden">
            <Button
              id="basic-button-3"
              aria-controls={openThree ? "basic-menu-3" : undefined}
              aria-haspopup="true"
              aria-expanded={openThree ? "true" : undefined}
              onClick={handleClickThree}
            >
              <MenuIcon
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "2rem",
                }}
              />
            </Button>
            <Menu
              id="basic-menu-3"
              anchorEl={anchorElThree}
              open={openThree}
              onClose={handleCloseThree}
              MenuListProps={{
                "aria-labelledby": "basic-button-3",
              }}
            >
              {MobileMenuList.map((item) => {
                return (
                  <MenuItem
                    key={item.name}
                    sx={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "14px",
                      width: "150px",
                      display: "flex",
                      gap: "10px",
                    }}
                    onClick={handleCloseThree}
                  >
                    <SvgIcon component={item.icon} />
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </MenuItem>
                );
              })}
              <MenuItem
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "14px",
                  width: "150px",
                  display: "flex",
                  gap: "10px",
                }}
                onClick={handleCloseThree}
              >
                <button
                  onClick={handleSingOut}
                  className="flex justify-center items-center gap-[10px]"
                >
                  <LogoutIcon />
                  <p>Logout</p>
                </button>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpNav;
