import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import tv from "./asset/tv.png";
import Main from "../Context";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const { input, setInput } = useContext(Main)
  
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  
  
  return (
    <header className={styled.header}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "flex justify-center items-center gap-4 left-2"
            : "flex justify-center items-center gap-4 left-2"
        }
      >
        <img src={tv} width={"40px"} />
        <p className="text-2xl font-semibold">MovieBox</p>
      </NavLink>

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav
        className={`flex-1 md:flex md:justify-center md:items-center ${
          styled.nav
        } ${sh ? styled.open : styled.close}`}
      >
        <div className="md:w-6/12 w-full md:mx-auto h-[50px] rounded-lg bg-transparent border-2 border-slate-300 md:px-5 px-2 flex justify-between items-center">
          <input
            className={`w-full h-full bg-transparent outline-none font-normal ${input.trim().length !== 0 && `text-slate-900`} ${input.trim().length === 0 && `text-slate-300`} placeholder-slate-300 placeholder-opacity-50 font-normal`}
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="What do you want to search for?"
          />
          <SearchIcon />
        </div>

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "flex justify-center items-center gap-4"
              : "flex justify-center items-center gap-4"
          }
        >
          <p className="font-normal">Sign in</p>
          <img src={tv} width={"30px"} />
        </NavLink>
      </nav>
    </header>
  );
};
