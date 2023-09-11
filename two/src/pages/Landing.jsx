import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { MainPage } from "../components/MainPage";
import useFetch from "../components/useFetch";
import { Search } from "../components/Search";
import Main from "../Context";
import { useContext, useState } from "react";

export const Landing = () => {
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    "GET"
  );

  const [numb, setNumb] = useState(0);

  const { input } = useContext(Main);

  const hero =
    !isPending && data?.results
      ? data.results[Math.floor(Math.random() * data.results.length)]
      : null;

  const bgUrl = hero
    ? `https://image.tmdb.org/t/p/original/${hero?.backdrop_path}`
    : "";

  return (
    <>
      <div
        style={{ "--image-url": `url(${bgUrl})` }}
        className={`relative h-[75vh] bg-[image:var(--image-url)] bg-gray-500 w-screen bg-no-repeat bg-cover bg-center`}
      >
        {input.trim().length !== 0 && <Search />}

        <ul className="absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2 min-h-[20%] w-[5%] hidden  flex-col overflow-scroll z-10 list-none k">
          {data?.results?.map((item, index) => {
            return <li key={index} className="text-white t">- {index }</li>;
          })}
        </ul>

        <div className="w-[min(90%,1300px)] mx-auto h-[calc(75vh+80px)] ">
          <Header />
          {!error?.status && input.trim().length === 0 && (
            <MainPage data={hero} error={error} isPending={isPending} />
          )}
        </div>
      </div>

      {!isPending && !error?.status && input.trim().length === 0 && (
        <Features data={data} error={error} isPending={isPending} />
      )}
      <Footer />
    </>
  );
};
