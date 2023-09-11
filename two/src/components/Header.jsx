import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import tv from "./images/tv.png";

import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };

  return (
    <header className={styled.header}>
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
        className={`flex-1 md:flex md:justify-center md:items-center ${styled.nav} ${
          sh ? styled.open : styled.close
        }`}
      >
        <div className="md:w-6/12 w-full md:mx-auto h-[50px] rounded-lg bg-transparent border-2 border-slate-300 md:px-5 px-2 flex justify-between items-center">
          <input
            className="w-full h-full bg-transparent outline-none text-white font-normal"
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
