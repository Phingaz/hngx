/* eslint-disable react/prop-types */
import { Card } from "./Card";
import { useContext } from "react";
import Main from "../Context";

export const Features = ({ data, isPending, error }) => {
  const { favorites } = useContext(Main);

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : data ? (
        <section className="w-[min(90%,1300px)] mx-auto py-10">
          <div className="flex justify-between pb-10">
            <h1 className="text-3xl font-bold">Featured Movie</h1>
            <a className="text-rose-500 font-semibold cursor-pointer tracking-tighter">
              See more &gt;
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8">
            {!isPending &&
              data?.map((movie) =>
                favorites.includes(movie.id) ? (
                  <Card key={movie.id} details={movie} favorites={true} />
                ) : (
                  <Card key={movie.id} details={movie} favorites={false} />
                )
              )}
          </div>
        </section>
      ) : (
        <div>
          <p>{error?.message}</p>
        </div>
      )}
    </>
  );
};
