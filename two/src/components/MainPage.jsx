/* eslint-disable react/prop-types */
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import imdb from "./asset/imdb.png";
import tomato from "./asset/tomato.png";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

export const MainPage = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies/" + data.id);
  };

  return (
    <main className="flex flex-col justify-center h-[100%] w-full md:w-6/12 text-white">
      <m.h1
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.005 }}
        className="md:text-5xl text-3xl font-bold leading-tighter mb-5 t"
      >
        {data?.title}
      </m.h1>
      <m.div
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-4 mb-5"
      >
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
      </m.div>
      <m.p
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, type: "bounce" }}
        className="md:w-[70%] mb-5 t"
      >
        {data?.overview}
      </m.p>
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 items-center justify-center font-bold self-start px-8 py-3 uppercase bg-rose-700 rounded-md"
        onClick={handleClick}
      >
        {" "}
        <PlayCircleIcon /> Watch Trailer
      </m.button>
    </main>
  );
};
