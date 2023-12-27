import { Link, useNavigate } from "react-router-dom";
// context
import { UserContext } from "../Context/UserProvider";
import { useContext } from "react";

// MUI components
import TextField from "@mui/material/TextField";

// react-hook-form and yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// sweetalert2
import Swal from "sweetalert2";

const Profile = () => {
  // define navigate
  const navigate = useNavigate();
  // context
  const { userData, isSingIn, singUpFunction, deleteAccountFunction } = useContext(UserContext);
  const avatar2 = "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp";

  // yup validation schema
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    username: yup.string().required("Username is required"),
    oldPassword: yup.string().required("Password is required").min(6).max(16),
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

  // submit function
  const onSubmit = (data) => {
    // check user sign in
    if (!isSingIn) {
      Swal.fire({
        title: "Error!",
        text: "Please sign in first",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      if (data.oldPassword !== userData.password) {
        Swal.fire({
          title: "Error!",
          text: "Old password is incorrect",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }
      singUpFunction(data);
      Swal.fire({
        title: "Welcome!",
        text: "You have successfully updated your profile!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  // delete account function
  const deleteAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgba(100,116,139,1)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAccountFunction();
        Swal.fire({
          title: "Deleted!",
          text: "Your account has been deleted.",
          icon: "success"
        });
        navigate("/");
      }
    });
  };

  return (
    <section className="container h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-center font-montserrat text-black">
        <span className="text-slate-gray">Hi</span>{" "}
        {isSingIn && userData.name ? userData.name : "user"} 👤
      </h1>

      <section className="flex flex-col xl:flex-row w-full h-auto p-3 md:p-5 mt-3 md:mt-5 lg:mt-6 xl:mt-8 gap-9">
        <section className="w-full md:w-1/2 h-auto flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold md:text-center font-montserrat text-slate-gray">
            Edit Profile
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* avatar */}
            <div className="flex flex-col">
              <div className="relative m-2">
                <img
                  src={userData.avatar || avatar2}
                  alt="avatar"
                  className="w-32 h-32 rounded-full"
                />
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="absolute -bottom-3 -left-0 cursor-pointer text-slate-gray font-montserrat text-md font-bold"
                />
              </div>
              <div className="flex flex-col md:flex-row my-3 p-3">
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                      
                    }}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic2"
                    label="Email"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                    }}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row p-3">
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic3"
                    label="UserName"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                      
                    }}
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic4"
                    label="Old Password"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                    }}
                    {...register("oldPassword")}
                  />
                  {errors.oldPassword && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.oldPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row p-3">
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic5"
                    label="New Password"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                      
                    }}
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="sm:mr-[20px]">
                  <TextField
                    id="outlined-basic6"
                    label="Confirm Password"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      marginBottom: "1rem",
                      minWidth: "300px",
                    }}
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-md font-montserrat my-2">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-slate-500 hover:bg-slate-400 text-white font-montserrat font-bold w-full md:w-1/2 p-4 rounded-md mb-[1rem]"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="w-full xl:w-1/2 h-auto flex flex-col gap-3 mt-3 md:mt-5 lg:mt-6 xl:mt-8">
          <Link to="/help" className="text-md md:text-lg text-slate-gray font-semibold font-montserrat hover:underline">payment methods</Link>
          <Link to="/help" className="text-md md:text-lg text-slate-gray font-semibold font-montserrat hover:underline">FAQ</Link>
          <Link to="/help" className="text-md md:text-lg text-slate-gray font-semibold font-montserrat hover:underline">Shipping</Link>
          <button 
          onClick={deleteAccount}
          className="p-3 md:p-5 bg-red-500 hover:bg-red-700 text-white-primary w-1/3 font-bold font-palanquin rounded-md shadow-lg">
          Delete Account</button>
        </section>
      </section>
    </section>
  );
};

export default Profile;
