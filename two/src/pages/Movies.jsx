import { Movie } from "../components/Movie";
import { Nav } from "../components/Nav";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { Video } from "../components/Video";
import { Loader } from "../components/Loader";
import { ErrorPage } from "../components/ErrorPage";

export const Movies = () => {
  const { id } = useParams();

  const { data, isPending } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    "GET"
  );
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex h-[100svh] bg-white">
          <Nav />
          <div className="flex-[9] flex flex-col pt-14 sm:pt-10 px-3 sm:px-10 lg:20">
            <div className="flex-1 min-h-[50vh] mb-5">
              <Video id={id} />
            </div>
            {data ? <Movie movieInfo={data} /> : <ErrorPage />}
          </div>
        </div>
      )}
    </>
  );
};
