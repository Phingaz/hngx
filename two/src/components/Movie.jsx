/* eslint-disable react/prop-types */
import star from "../components/asset/Star.png";
import { MovieInfo } from "./MovieInfo";

export const Movie = ({ movieInfo }) => {
  const year = Date.UTC(parseInt(movieInfo?.release_date)); /* ?.split("-")[0]*/
  const runtimeHour = Math.floor(movieInfo?.runtime / 60);
  const runtimeMin = movieInfo?.runtime % 60;

  return (
    <div className="flex-1">
      <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-10">
        <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-1">
          <h1 className="font-semibold" data-testid="movie-title">
            {movieInfo.title} &#x2022; {year} &#x2022; PG-13 &#x2022;{" "}
            {runtimeHour}h{" "}
            <span data-testid="movie-runtime">{runtimeMin}m</span>
          </h1>
          <div className="flex gap-1 flex-wrap">
            {movieInfo?.genres?.map((el) => (
              <p key={el.id}>{el.name}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={star} className="object-contain object-center" />
          <p className="text-gray-300">
            {movieInfo?.vote_average?.toFixed(1)}{" "}
          </p>
          <p>| {movieInfo?.vote_count?.toString().slice(0, 3)}k</p>
        </div>
      </div>
      <MovieInfo movieInfo={movieInfo} />
    </div>
  );
};
