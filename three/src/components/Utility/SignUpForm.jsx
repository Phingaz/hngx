/* eslint-disable react/prop-types */
import { Input } from "./Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Main from "../../Contex";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const {
    register,
    handleChange,
    handleRegister,
    showPassword,
    setShowPassword,
    required,
    formError,
  } = useContext(Main);

  return (
    <form className="space-y-3" onSubmit={handleRegister}>
      <Input
        htmlFor="email"
        title="Enter your email"
        placeholder="email@email.com"
        type="email"
        name="email"
        value={register.email}
        onchange={handleChange}
        required={required}
        status={formError?.email}
        message={formError?.message}
      />
      <Input
        htmlFor="password"
        title="Choose a password"
        placeholder="***********"
        type={showPassword ? "text" : "password"}
        name="password"
        value={register.password}
        onchange={handleChange}
        required={required}
        status={formError?.password}
        message={formError?.message}
        icon={
          showPassword ? (
            <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
          )
        }
      />
      <Input
        htmlFor="confirmPassword"
        title="Confirm password"
        placeholder="***********"
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        value={register?.confirmPassword}
        onchange={handleChange}
        required={required}
        status={formError?.password}
        message={formError?.message}
        icon={
          showPassword ? (
            <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
          )
        }
      />
      <div className="flex sm:items-center sm:justify-between sm:flex-row flex-col justify-start gap-5 sm:gap-10"></div>
      <button
        type="submit"
        className="w-full bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-gray-400 hover:border-gray-600 hover:font-semibold t"
      >
        Sign up
      </button>
      {formError?.error && (
        <p className="block mb-2 text-xs font-medium text-red-600 text-center">
          {formError.message}
        </p>
      )}
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};
