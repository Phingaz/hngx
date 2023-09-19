import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [sh, setSh] = useState(false);
  const navigate = useNavigate();

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
            ? "flex justify-center items-center gap-4 left-2 link t"
            : "flex justify-center items-center gap-4 left-2 link t"
        }
      >
        {/* <img src={tv} width={"40px"} /> */}
        <p className="text-2xl font-semibold t">MovieBox</p>
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
        className={`flex-1 md:flex md:justify-center md:items-center t ${
          styled.nav
        } ${sh ? styled.open : styled.close}`}
      >
        <div className="flex">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "flex justify-center items-center gap-4"
                : "flex justify-center items-center gap-4"
            }
          >
            <p className="font-normal text-lg link">Sign in</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
