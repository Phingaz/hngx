import img from "./asset/s.png";
import imdb from "./asset/imdb.png";
import tomato from "./asset/tomato.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Card = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full min-h-[45px] flex justify-between items-center md:p-5">
          <p className="bg-white bg-opacity-50 text-gray-900 font-semibold uppercase px-2 py-1 rounded-3xl">
            Tv series
          </p>
          <p className="bg-white bg-opacity-50 text-gray-900 p-2 rounded-full w-[40px] aspect-square] flex justify-center items-center cursor-pointer">
            <FavoriteIcon className="text-slate-300" />
          </p>
        </div>
        <img src={img} className="w-full object-contain object-center" />
      </div>
      <p className="text-gray-400 font-semibold text-base">
        USA, 2016 - Current
      </p>
      <h2 className="text-gray-900 font-semibold text-2xl capitalize">
        Stranger things
      </h2>
      <div className="flex justify-between gap-4 text-gray-900">
        <div className="flex gap-1">
          <img src={imdb} className="object-contain" />
          <p>score</p>
        </div>
        <div className="flex gap-1">
          <img src={tomato} className="object-contain" />
          <p>score</p>
        </div>
      </div>
      <p className="font-semibold text-base text-gray-400">
        Action, Adventure, Horror
      </p>
    </div>
  );
};
