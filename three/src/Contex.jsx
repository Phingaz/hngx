/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useFetch from "./components/Utility/useFetch";

const Main = createContext();

export function MainCtxProvider(props) {
  const required = false;

  const testUser = {
    email: "user@example.com",
    password: "1Password",
  };
  const [input, setInput] = useState({
    error: false,
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const [formError, setFormError] = useState({
    email: true,
    password: true,
    message: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormError({ error: false, email: false, password: false, message: "" });
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setInput((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = input.email;
    const password = input.password;
    if (email.trim().length === 0) {
      setFormError({
        email: true,
        message: "Please enter a valid email",
      });
      return;
    }
    if (password.trim().length === 0) {
      setFormError({
        password: true,
        message: "Password is invalid",
      });
      return;
    }
    if (email !== testUser.email && password !== testUser.password) {
      setFormError({
        error: true,
        message: "Invalid username or password, please try again",
      });
      return;
    }
    setFormError({ error: false, message: "" });
    setLoggedIn({ loggedIn: true, message: "Logged in successfully" });
  };

  const contextValue = {
    loggedIn,
    formError,
    required,
    input,
    setInput,
    showPassword,
    setShowPassword,
    handleChange,
    handleSubmit,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
