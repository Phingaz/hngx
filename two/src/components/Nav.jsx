import { NavLink } from "react-router-dom";
import tv from "../components/asset/tv.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { links } from "../components/data.jsx";
import styled from "./Nav.module.css"
import { useState } from "react";

export const Nav = () => {

  const [shv, setShv] = useState(false);

  const shoNa = () => {
    setShv((p) => !p);
  };

  return (
    <>
    <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${shv && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav className={`flex-[2] h-[100svh] sm:flex flex-col items-center pt-10 gap-10 border border-gray-300 rounded-tr-[50px] rounded-br-[50px] ${styled.nav_second} ${shv ? styled.open_second : styled.closed_second}`}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "flex justify-center items-center gap-2"
            : "flex justify-center items-center gap-2"
        }
      >
        <img src={tv} width={"40px"} />
        <p className=" text-[16px] font-semibold">MovieBox</p>
      </NavLink>

      <div className="flex flex-col justify-between w-full gap-5 md:gap-20">
        <div className="">
          {links.map((el) => {
            return (
              <NavLink
                key={el.id}
                to={el.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "flex justify-center items-center gap-2 bg-rose-100 py-5 border-r-4 border-rose-700 text-rose-700 font-dm font-bold"
                    : "flex justify-center items-center gap-2 py-5  font-dm font-bold text-gray-400 hover:bg-rose-100 hover:transition-all"
                }
              >
                {el.icon}
                <p>{el.name}</p>
              </NavLink>
            );
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="w-[80%] mx-auto flex flex-col justify-center items-center sm:p-2 py-2 px-1 sm:text-left text-center bg-rose-100 border-2 border-rose-400 rounded-3xl">
            <h4 className="font-bold text-gray-500 mb-3 text-sm">
              Play movie quizes and earn free tickets
            </h4>
            <p className="text-gray-500 font-semibold text-sm mb-3">
              50k people are playing now
            </p>
            <button className="bg-rose-300 text-sm text-rose-700 font-semibold md:px-5 px-3 py-2 rounded-3xl">
              Start playing
            </button>
          </div>
          <p className="font-semibold text-gray-500 cursor-pointer">
            <span>
              <LogoutRoundedIcon />
            </span>{" "}
            Log out
          </p>
        </div>
      </div>
    </nav>
    </>
   
  );
};
