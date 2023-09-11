/* eslint-disable react/prop-types */
import s from "../components/asset/s.png";

export const MovieInfo = ({ movieInfo }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-between mb-5 sm:mb-0">
      <div className="flex-[7] flex flex-col gap-4 text-sm justify-between">
        <div className="flex gap-4 flex-col">
          <p className="" data-testid="movie-overview">
            {movieInfo.overview}
          </p>
          <p>
            Director: <span className="text-rose-700">Joesp Kosinki</span>
          </p>
          <p>
            Writers: <span className="text-rose-700">Joesp Kosinki</span>
          </p>
          <p>
            Stars: <span className="text-rose-700">Joesp Kosinki</span>
          </p>
        </div>

        <div className="flex rounded-lg border border-gray-400">
          <p className="bg-rose-700 px-5 rounded-lg text-white grid place-content-center">
            Top rated movie #65
          </p>
          <select
            id="countries"
            className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 rounded-r-lg outline-none ring-0 border-0 font-semibold"
          >
            <option selected>Awards 9 nominations</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className="flex-[3] flex flex-col gap-3 items-center">
        <button className="bg-rose-700 text-white py-2 rounded-lg w-full font-semibold">
          See Showtimes
        </button>
        <button className="bg-rose-200 text-black py-2 rounded-lg w-full font-semibold border-rose-700 border-[1px]">
          More watch options
        </button>
        <div className="grid grid-cols-3 gap-1 rounded-md">
          <img
            src={s}
            className="object-contain object-center rounded-tl-lg rounded-bl-lg"
          />
          <img src={s} className="object-contain object-center" />
          <img
            src={s}
            className="object-contain object-center rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
};
