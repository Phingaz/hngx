import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };

  const title = "HelpMeOut";

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
        <img src="/icons/icon.png" width={"40px"} />
        <p className="text-2xl md:text-primary font-bold hover:link t">
          {title}
        </p>
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
        className={`flex-1 md:flex md:justify-center md:items-center md:gap-5 t ${
          styled.nav
        } ${sh ? styled.open : styled.close}`}
      >
        <a
          href="#features"
          className="font-semibold md:text-primary text-lg t hover:link"
        >
          Features
        </a>
        <a
          href="#howitworks"
          className="font-semibold md:text-primary text-lg t hover:link"
        >
          How it works
        </a>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "font-bold md:text-primary text-lg t hover:link md:hidden block"
              : "font-bold md:text-primary text-lg t hover:link md:hidden block"
          }
        >
          Get Started
        </NavLink>
      </nav>

      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "font-bold md:text-primary text-lg t hover:link md:block hidden"
            : "font-bold md:text-primary text-lg t hover:link md:block hidden"
        }
      >
        Get Started
      </NavLink>
    </header>
  );
};
