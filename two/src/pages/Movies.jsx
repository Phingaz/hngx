import { Movie } from "../components/Movie";
import { Nav } from "../components/Nav";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export const Movies = () => {
  const { id } = useParams();

  const { data, isPending } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    "GET"
  );

  const bgUrl = data
    ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`
    : "";

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex h-[100svh ]">
          <Nav />
          <div className="flex-[9] flex flex-col pt-14 sm:pt-10 px-3 sm:px-10 lg:20">
            <div className="flex-1 min-h-[50vh] mb-5">
              <div className="w-full h-full relative">
                <img src={bgUrl} className="w-full h-full" />
                <PlayCircleIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50 scale-[5]"/>
              </div>
              {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe> */}
            </div>
            {data ? (
              <Movie movieInfo={data} />
            ) : (
              <div className="absolute k">
                <p>Something went wrong, please try again later</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
