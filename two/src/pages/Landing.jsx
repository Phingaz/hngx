import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { MainPage } from "../components/MainPage";
import useFetch from "../components/useFetch";
import { Search } from "../components/Search";
import Main from "../Context";
import { useContext, useState, useEffect } from "react";

export const Landing = () => {
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    "GET"
  );

  const { input } = useContext(Main);

  const [numb, setNumb] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data?.results?.slice(0, 10));
    const interval = setInterval(() => {
      setNumb((p) => {
        return numb >= 9 ? 0 : p + 1;
      });
    }, 9000);
    return () => clearInterval(interval);
  }, [numb, data, movies?.length]);

  const hero = !isPending && movies ? movies[numb] : null;

  const bgUrl = hero
    ? `https://image.tmdb.org/t/p/original/${hero?.backdrop_path}`
    : "";

  const switchMovie = (item) => {
    setNumb(item);
  };

  return (
    <>
      <div
        style={{ "--image-url": `url(${bgUrl})` }}
        className={`relative min-h-[500px] bg-[image:var(--image-url)] bg-gray-500 w-screen bg-no-repeat bg-cover bg-top `}
      >
        {input.trim().length !== 0 && <Search />}

        {input.trim().length === 0 && (
          <ul className="absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2 h-[35%] hidden md:flex flex-col gap-3 z-10 list-none cursor-pointer overflow-y-scroll px-5 u">
            {movies?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => switchMovie(index)}
                  className={` text-xl font-semibold transition-all duration-200 t hover:scale-[1.2] hover:text-red-300 ${
                    numb === index ? "l text-rose-600" : "text-white"
                  }`}
                >
                  - {index + 1}
                </li>
              );
            })}
          </ul>
        )}

        <div className="w-[min(90%,1300px)] mx-auto h-[calc(75vh+80px)] ">
          <Header />
          {!error?.status && input.trim().length === 0 && (
            <MainPage data={hero} error={error} isPending={isPending} />
          )}
        </div>
      </div>

      {!isPending && !error?.status && input.trim().length === 0 && (
        <Features data={movies} error={error} isPending={isPending} />
      )}
      <Footer />
    </>
  );
};
