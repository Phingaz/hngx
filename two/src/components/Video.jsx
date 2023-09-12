/* eslint-disable react/prop-types */
import useFetch from "./useFetch";
import { Loader } from "./Loader";

export const Video = ({ id }) => {
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`
  );

  const movieId = !isPending && data?.results && data.results[0]?.key;
  return (
    <>
      {isPending ? (
        <Loader />
      ) : error.status ? (
        <p className="text-black text-center">Something went wrong</p>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${movieId}`}
          title="Embedded Video"
        ></iframe>
      )}
    </>
  );
};
