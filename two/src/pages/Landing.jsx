import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { MainPage } from "../components/MainPage";
import useFetch from "../components/useFetch";

export const Landing = () => {

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    "GET"
  );

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
        <div className="w-[min(90%,1300px)] mx-auto h-[calc(75vh+80px)] ">
          <Header />
          {!error?.status && (
            <MainPage data={hero} error={error} isPending={isPending} />
          )}
        </div>
      </div>

      {!isPending && !error?.status && (
        <Features data={data} error={error} isPending={isPending} />
      )}
      <Footer />
    </>
  );
};
