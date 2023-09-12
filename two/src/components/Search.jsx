/* eslint-disable react/prop-types */
import { Card } from "./Card";
import Main from "../Context";
import { useContext } from "react";
import useFetch from "./useFetch";
import { Loader } from "./Loader";
import { ErrorPage } from "./ErrorPage";

export const Search = () => {
  const { input } = useContext(Main);

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1, "GET"`
  );

  return (
    <>
      <div className="absolute top-0 left-0 bg-white w-screen z-[1]">
        {isPending ? (
          <Loader />
        ) : error.status ? (
          <ErrorPage />
        ) : (
          <section className="w-[min(90%,1300px)] mx-auto py-20">
            <div className="flex justify-between pb-10">
              <h1 className="text-3xl font-bold">Search result</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8">
              {input.trim().length > 1 && data?.results?.length === 0 && (
                <p className="text-black whitespace-nowrap">
                  Search result not found, please refine your search
                </p>
              )}

              {!isPending &&
                data?.results?.map((movie) => (
                  <Card key={movie.id} details={movie} />
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
