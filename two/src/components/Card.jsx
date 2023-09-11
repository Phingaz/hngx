/* eslint-disable react/prop-types */
import imdb from "./asset/imdb.png";
import tomato from "./asset/tomato.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { moveiGenreId } from "./data";

import Main from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ details }) => {
  const { setMovieDetails } = useContext(Main);

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

  const year = details.release_date.split("-")[0];

  const navigate = useNavigate();

  const handlClick = () => {
    setMovieDetails(details);
    navigate("/movies/"+details.id);
  };

  /* 
  The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]
 */

  return (
    <div
      onClick={handlClick}
      className="flex flex-col gap-1 border border-gray-100 b transition-all hover:s hover:rounded-lg cursor-pointer pb-1"
      data-testid="movie-card"
    >
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full min-h-[45px] flex justify-end items-center md:p-5 p-2">
          {/* <p className="bg-white bg-opacity-50 text-gray-900 font-semibold uppercase px-2 py-1 rounded-3xl text-[0.8rem] md:text-base">
            Tv series
          </p> */}
          <p className="bg-white bg-opacity-30 text-gray-900 p-2 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
            <FavoriteIcon className="text-white w-full h-full opacity-60 p-1" />
          </p>
        </div>
        <img
          src={`${baseImgUrl}${details.poster_path}`}
          className="w-full object-contain object-center hover:rounded-lg"
          data-testid="movie-poster"
        />
      </div>
      <p className="text-gray-400 font-semibold md:text-base text-sm">
        USA, <span data-testid="movie-release-date">{year}</span>
      </p>
      <h2 className="text-gray-900 font-semibold md:text-xl tracking-tight capitalize"
      data-testid="movie-title"
      >
        {details.title}
      </h2>
      <div className="flex justify-between gap-4 text-gray-900">
        <div className="flex items-center justify-center gap-1">
          <img src={imdb} className="object-contain" />
          <p className="md:text-base text-xs font-semibold">
            {details.popularity > 100 ? 100 : Math.floor(details.popularity)}
            /100
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src={tomato} className="object-contain" />
          <p className="md:text-base text-xs font-semibold">
            {Math.floor(details.vote_average * 10)}%
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {genre.map((el, i) => (
          <p
            key={el}
            className="font-semibold text-gray-400 md:text-base text-xs"
          >
            {el}
            {i + 1 === genre.length ? "" : ","}
          </p>
        ))}
      </div>
    </div>
  );
};
