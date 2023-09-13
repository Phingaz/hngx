/* eslint-disable react/prop-types */
import imdb from "./asset/imdb.png";
import tomato from "./asset/tomato.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { moveiGenreId } from "./data";

import Main from "../Context";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { motion as m } from "framer-motion";

export const Card = ({ details, favorites }) => {
  const { setMovieDetails, handleFavorites } = useContext(Main);
  const scrollRef = useRef(null);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  const genre = details.genre_ids.map((el) => {
    let g = [];
    moveiGenreId.map((ele) => {
      if (el === ele.id) {
        g.push(ele.name);
      }
    });
    return g;
  });

  const year = details.release_date; /*.split("-")[0]*/

  const navigate = useNavigate();

  const handlClick = () => {
    setMovieDetails(details);
    navigate("/movies/" + details.id);
  };

  const addToFavorites = (e, item) => {
    e.stopPropagation();
    handleFavorites(item);
  };

  return (
    <m.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
      viewport={{ scrollRef, margin: "-35px" }}
      onClick={handlClick}
      className="flex flex-col gap-1 border border-gray-100 b transition-all hover:s hover:rounded-lg pb-1 z-0"
      data-testid="movie-card"
    >
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full min-h-[45px] flex justify-end items-center p-2 z-[10]">
          <p
            className={`bg-white bg-opacity-30 text-gray-900 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:opacity-100 hover:l transition-all`}
          >
            <FavoriteIcon
              className={`w-full h-full p-1 hover:opacity-100 z-[11] ${
                favorites
                  ? "opacity-100 text-rose-600 "
                  : "text-white opacity-60"
              }`}
              onClick={(e) => addToFavorites(e, details)}
            />
          </p>
        </div>
        <img
          src={`${baseImgUrl}${details.poster_path}`}
          className="w-full object-contain object-center hover:rounded-lg cursor-pointer"
          data-testid="movie-poster"
          alt="poster-img"
        />
      </div>
      <p className="text-gray-400 font-semibold lg:text-base text-sm">
        USA, <span data-testid="movie-release-date">{year}</span>
      </p>
      <h2
        className="text-gray-900 font-semibold md:text-lg lg:text-xl tracking-tight capitalize"
        data-testid="movie-title"
      >
        {details.title}
      </h2>
      <div className="flex justify-between gap-4 text-gray-900">
        <div className="flex items-center justify-center gap-1">
          <img src={imdb} className="object-contain" />
          <p className="lg:text-base md:text-sm text-xs font-semibold">
            {details.popularity > 100 ? 100 : Math.floor(details.popularity)}
            /100
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src={tomato} className="object-contain" />
          <p className="lg:text-base md:text-sm text-xs font-semibold">
            {Math.floor(details.vote_average * 10)}%
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {genre.map((el, i) => (
          <p
            key={el}
            className="font-semibold text-gray-400 md:text-sm lg:text-base text-xs"
          >
            {el}
            {i + 1 === genre.length ? "" : ","}
          </p>
        ))}
      </div>
    </m.div>
  );
};
