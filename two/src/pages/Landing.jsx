import { Header } from "../components/Header";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export const Landing = () => {
  return (
    <>
      <div className="relative bg-[url('./src/images/Poster.png')] h-[75vh] w-screen bg-no-repeat bg-cover bg-center">
        <div className="w-[min(95%,1300px)] mx-auto h-[calc(75vh-80px)] ">
          <Header />
          <main className="flex flex-col justify-center h-full w-full md:w-6/12 text-white font-dm">
            <h1 className="md:text-5xl text-3xl font-bold leading-tighter mb-5">
              John Wick 3: <br /> Parabellum
            </h1>
            <div className="flex gap-4 mb-5">
              <div className="flex gap-1">
                <p>logo</p>
                <p>score</p>
              </div>
              <div className="flex gap-1">
                <p>logo</p>
                <p>score</p>
              </div>
            </div>
            <p className="md:w-[70%] mb-5">
              John Wick is on the run after killing a member of the
              international assassins guild, and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere.
            </p>
            <button className="flex gap-3 items-center justify-center font-bold self-start px-8 py-3 uppercase bg-rose-700 rounded-md">
              {" "}
              <PlayCircleIcon /> Watch Trailer
            </button>
          </main>
        </div>
      </div>
    </>
  );
};
