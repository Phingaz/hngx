/* eslint-disable react/prop-types */
import useFetch from "./useFetch";

export const Video = ({ id }) => {
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`
  );

  const movieId = !isPending && data?.results && data.results[0]?.key;

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong, please try again later..</div>
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
