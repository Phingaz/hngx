import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropDownNav } from "./DropDownNav";

export const LoggedInHeader = () => {
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
        className={`flex-1 md:flex md:justify-end md:items-center md:gap-5 t ${
          styled.nav
        } ${sh ? styled.open : styled.close}`}
      >
        <DropDownNav data={{ name: "John Mark" }} />
      </nav>
    </header>
  );
};
