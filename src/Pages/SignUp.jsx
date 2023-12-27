//full form for sign up
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SLformTow } from "../assets/images";

// react-hook-form and yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MUI components
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

// context
import { UserContext } from "../Context/UserProvider";
import { useContext } from "react";

// sweetalert2
import Swal from 'sweetalert2'

const SignUp = () => {
  // define navigate
  const navigate = useNavigate();

  // context
  const { singUpFunction} = useContext(UserContext);

  // state for checkbox
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState(null);

  // yup validation schema
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(6).max(16),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  // submit function and check checkbox
  const onSubmit = (data) => {
    if (!isChecked) {
      setMessage("Please Agree to the Terms and Conditions");
      return;
    }
    singUpFunction(data);
    Swal.fire({
      title: "Welcome!",
      text: "You have successfully registered!",
      icon: "success"
    });
    navigate("/");
  };

  return (
    <section className="flex flex-col lg:flex-row">
      {/* form */}
      <section className="w-full xl:w-1/2 h-screen flex flex-col justify-center items-center lg:ml-9">
        <h1 className="text-center text-slate-gray text-4xl font-bold font-montserrat my-6">
          Shoppy
        </h1>
        <h1 className="text-center text-slate-gray text-xl font-bold font-montserrat my-6">
          Sing Up
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-5 m-5 justify-center items-center mx-auto max-w-[490px]"
        >
          <TextField
            sx={{
              width: "100%",
              marginBottom: "1rem",
              maxWidth: "490px",
              minWidth: "300px",
            }}
            id="outlined-basic01"
            label="Name"
            variant="outlined"
            error={false}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-md font-montserrat my-2">
              {errors.name.message}
            </p>
          )}
          <TextField
            sx={{
              width: "100%",
              marginBottom: "1rem",
              maxWidth: "490px",
              minWidth: "300px",
            }}
            id="outlined-basic02"
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-md font-montserrat my-2">
              {errors.email.message}
            </p>
          )}
          <TextField
            sx={{
              width: "100%",
              marginBottom: "1rem",
              maxWidth: "490px",
              minWidth: "300px",
            }}
            id="outlined-basic03"
            label="Username"
            variant="outlined"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-md font-montserrat my-2">
              {errors.username.message}
            </p>
          )}
          <TextField
            sx={{
              width: "100%",
              marginBottom: "1rem",
              maxWidth: "490px",
              minWidth: "300px",
            }}
            id="outlined-basic04"
            label="Password"
            type="password"
            variant="outlined"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-md font-montserrat my-2">
              {errors.password.message}
            </p>
          )}
          <TextField
            sx={{
              width: "100%",
              marginBottom: "1rem",
              maxWidth: "490px",
              minWidth: "300px",
            }}
            id="outlined-basic05"
            label="Confirm Password"
            type="password"
            variant="outlined"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-md font-montserrat my-2">
              {errors.confirmPassword.message}
            </p>
          )}
          <div className="w-full h-auto">
            <div className="flex justify-start items-center gap-3 my-3">
              <input 
              type="checkbox" 
              id="agree" 
              name="agree" 
              value={isChecked} 
              onChange={() => setIsChecked(!isChecked)}  
              />
              <label
                className="text-slate-gray font-montserrat"
                htmlFor="agree"
              >
                {" "}
                I agree to the{" "}
                <span className="text-slate-500">Terms and Conditions</span>
              </label>
              {
                message && <p className="text-red-500 text-md font-montserrat my-2">{message}</p>
              }
            </div>
            <div className="flex justify-start items-center gap-3 my-3">
              <p className="text-slate-gray font-montserrat">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-slate-700 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-400 text-white font-montserrat font-bold w-full p-4 rounded-md mb-[1rem]"
            >
              Sign Up
            </button>
            <button className="flex justify-center items-center gap-3 hover:bg-slate-500 text-black hover:text-white font-montserrat font-bold w-full p-4 rounded-md border border-slate-300 mb-[1rem]">
              <GoogleIcon sx={{ color: "red" }} />
              <p>Sign Up with Google</p>
            </button>
            <button className="flex justify-center items-center gap-3 hover:bg-slate-500 text-black hover:text-white font-montserrat font-bold w-full p-4 rounded-md border border-slate-300 mb-[1rem]">
              <FacebookIcon sx={{ color: "blue" }} />
              <p>Sign Up with Facebook</p>
            </button>
          </div>
        </form>
        <Link
          to="/"
          className="text-lg text-black-secondary font-palanquin font-bold leading-normal p-3 lg:p-5 bg-white-primary rounded-md shadow-md hover:bg-slate-500 hover:text-white m-5"
        >Home</Link>
      </section>
      {/* image */}
      <section className="hidden xl:block w-full xl:w-1/2 h-screen">
        <img
          src={SLformTow}
          alt="image"
          className="w-full h-full object-cover"
        />
      </section>
    </section>
  );
};

export default SignUp;
