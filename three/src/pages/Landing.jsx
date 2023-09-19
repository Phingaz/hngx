import { ImagesList } from "../components/Utility/ImagesList";
import { Header } from "../components/Nav/Header";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../sample";

export const Landing = () => {
  return (
    <>
      <Header />
      <div className="min-h-[100svh] w-screen bg-stone-200">
        <div className="flex flex-col gap-5 py-[100px] justify-center items-center place-content-center w-[min(95%,1000px)] min-h-full mx-auto">
          <div className="relative w-full h-[50px] border-2 border-gray-400 rounded-lg hover:border-gray-600 t">
            <input
              placeholder="Start typing to search by tags"
              className="w-full h-full bg-transparent px-5"
            />
            <div className="absolute right-5 top-[22%]">
              <SearchIcon className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <ImagesList images={images} />
        </div>
      </div>
    </>
  );
};
