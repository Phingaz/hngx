/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { images } from "./sample";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./components/FireBase";

const Main = createContext();

export function MainCtxProvider(props) {
  const required = false;

  const [isLoading, setIsLoading] = useState(false);

  const setSesh = (status) => {
    sessionStorage.setItem("loggedIn", status);
    setLoggedIn(true);
  };

  const getSesh = () => {
    return sessionStorage.getItem("loggedIn");
  };

  const removeSesh = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("loggedIn");
      setLoggedIn(false);
      window.location.reload();
    } catch (error) {
      setFormError({
        error: true,
        message: error.message,
      });
    }
  };

  //LOGIN FORM

  useEffect(() => {
    const loggedIn = getSesh();
    if (loggedIn) {
      setLoggedIn(true);
      return;
    }
  }, []);

  const [login, setLogin] = useState({
    error: false,
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [formError, setFormError] = useState({
    email: true,
    password: true,
    message: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = login.email;
    const password = login.password;
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

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setFormError({ error: false, message: "" });
      setLoggedIn(true);
      setSesh(loggedIn);
      setIsLoading(false);
    } catch (error) {
      setFormError({
        error: true,
        message: error.message,
      });
      setIsLoading(false);
    }
  };

  //REGISTER FORM
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = register.email.trim();
    const password = register.password.trim();
    const confirmPassword = register.confirmPassword.trim();

    if (email.length === 0) {
      setFormError({
        error: true,
        message: "Please enter a valid email",
      });
      return;
    }

    if (password.length === 0 || confirmPassword.length === 0) {
      console.log(password);
      setFormError({
        error: true,
        message: "Passwords can not be empty",
      });
      return;
    }

    if (password !== confirmPassword) {
      setFormError({
        error: true,
        message: "Passwords do not match",
      });
      return;
    }

    try {
      setIsLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (!user) throw new Error("Error creating user");
      setLoggedIn(true);
      setSesh(loggedIn);
      setIsLoading(false);
    } catch (error) {
      setFormError({
        error: true,
        message: error.message,
      });
      setIsLoading(false);
    }
  };

  //SEARCH
  const [search, setSearch] = useState("");
  const [filteredImages, setFilteredImages] = useState(images);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filteredImages = images.filter((image) => {
      const lowercaseTags = image.tag.map((tag) => tag.toLowerCase());
      return lowercaseTags.some((tag) => tag.includes(searchTerm));
    });

    if (filteredImages.length === 0) {
      setFilteredImages();
    } else {
      setFilteredImages(filteredImages);
    }
  };

  const handleChange = (e) => {
    setFormError({ error: false, email: false, password: false, message: "" });
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setLogin((prev) => ({ ...prev, [name]: val }));
    setRegister((prev) => ({ ...prev, [name]: val }));
  };

  const [items, setItems] = useState();

  useEffect(() => {
    const updatedList = filteredImages
    setItems(updatedList);
  }, [filteredImages]);

  const contextValue = {
    items,
    isLoading,
    loggedIn,
    formError,
    required,
    login,
    register,
    search,
    filteredImages,
    showPassword,
    setItems,
    setLogin,
    setShowPassword,
    handleChange,
    handleLogin,
    handleRegister,
    handleSearch,
    removeSesh,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
