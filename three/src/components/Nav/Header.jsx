import styled from "./Header.module.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Main from "../../Contex";

export const Header = () => {
  const { loggedIn, removeSesh } = useContext(Main);

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
            ? "flex justify-center items-center gap-4 left-2 hover:text-gray-500 hover:font-semibold font-normal text-lg t"
            : "flex justify-center items-center gap-4 left-2 hover:text-gray-500 hover:font-semibold font-normal text-lg t"
        }
      >
        {/* <img src={tv} width={"40px"} /> */}
        <p className="text-2xl font-semibold t">Hngx Mentors</p>
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
        className={`md:flex md:justify-center md:items-center t ${styled.nav} ${
          sh ? styled.open : styled.close
        }`}
      >
        {loggedIn && (
          <div className="flex flex-col md:flex-row gap-4 text-white">
            {/* <a
              href="https://piiimageuploader.netlify.app/"
              target="_blank"
              className="flex justify-center items-center gap-4 text-gray-500 hover:text-gray-700 hover:font-semibold font-normal text-lg t"
              rel="noreferrer"
            >
              Upload an image
            </a> */}
            <button
              onClick={() => {
                removeSesh();
              }}
              className="flex justify-center items-center gap-4 text-gray-500 hover:text-gray-700 hover:font-semibold font-normal text-lg t"
            >
              Log out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
