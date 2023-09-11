/* eslint-disable react/prop-types */
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import imdb from "./asset/imdb.png";
import tomato from "./asset/tomato.png";
import { useNavigate } from "react-router-dom";

export const MainPage = ({ data, error, isPending }) => {
  const navigate = useNavigate();
  // console.log(data)
  const handleClick = () => {
    navigate("/movies/" + data.id);
  };

  return (
    <>
      {isPending ? (
        <div className="text-white text-2xl">Loading...</div>
      ) : error ? (
        <div className="text-white text-2xl">{error.status}</div>
      ) : (
        <main className="flex flex-col justify-center h-[100%] w-full md:w-6/12 text-white">
          <h1 className="md:text-5xl text-3xl font-bold leading-tighter mb-5 t">
            {data?.title}
          </h1>
          <div className="flex gap-4 mb-5">
            <div className="flex items-center justify-center gap-1">
              <img src={imdb} className="object-contain" />
              <p className="md:text-base text-xs font-semibold">
                {data?.popularity > 100 ? 100 : Math.floor(data?.popularity)}
                /100
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img src={tomato} className="object-contain" />
              <p className="md:text-base text-xs font-semibold">
                {Math.floor(data?.vote_average * 10)}%
              </p>
            </div>
          </div>
          <p className="md:w-[70%] mb-5 t">{data?.overview}</p>
          <button
            className="flex gap-3 items-center justify-center font-bold self-start px-8 py-3 uppercase bg-rose-700 rounded-md"
            onClick={handleClick}
          >
            {" "}
            <PlayCircleIcon /> Watch Trailer
          </button>
        </main>
      )}
    </>
  );
};
