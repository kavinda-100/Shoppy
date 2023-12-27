import { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {

  // state
  const [isSingIn, setIsSingIn] = useState(
    JSON.parse(localStorage.getItem("isSingIn")) || false
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  const [status, setStatus] = useState(null);

  // sing up user
  const singUpFunction = (data) => {
    const { name, email, username, password, confirmPassword } = data;

    const newUser = {
      name,
      email,
      username,
      password,
      confirmPassword,
    };
    setUserData(newUser);
    setIsSingIn(true);
    localStorage.setItem("userData", JSON.stringify(newUser));
    localStorage.setItem("isSingIn", JSON.stringify(true));
  };

  // sing in user
  const singInFunction = (data) => {
    const { username, password } = data;

    if (username === userData.username && password === userData.password) {
      setIsSingIn(true);
      localStorage.setItem("isSingIn", JSON.stringify(isSingIn));
      setStatus("success");
    } else if (username !== userData.username) {
      setStatus("username");
    } else if (password !== userData.password) {
      setStatus("password");
    } else {
      setStatus("usernameAndPassword");
    }
  };

  // sing out user
  const singOutFunction = () => {
    setIsSingIn(false);
    localStorage.removeItem("isSingIn");
  };

  // delete account
  const deleteAccountFunction = () => {
    setIsSingIn(false);
    localStorage.removeItem("isSingIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("cart");
  };

  // values
  const values = {
    isSingIn,
    status,
    userData,
    singInFunction,
    singUpFunction,
    singOutFunction,
    deleteAccountFunction,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
