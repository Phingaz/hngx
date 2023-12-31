import { ImagesList } from "../components/Utility/ImagesList";
import { Header } from "../components/Nav/Header";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../sample";
import { useContext, useEffect } from "react";
import Main from "../Contex";
import { useNavigate } from "react-router";
import { Loader } from "../components/Utility/Loader";

export const Landing = () => {
  const { handleSearch, search, loggedIn, isLoading, filteredImages } =
    useContext(Main);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="min-h-[100svh] bg-stone-200">
            <div className="flex flex-col gap-5 py-[100px] justify-center items-center place-content-center w-[min(90%,1200px)] min-h-full mx-auto">
              <div className="relative w-full h-[50px] border-2 border-gray-400 rounded-lg hover:border-gray-600 t">
                <input
                  value={search}
                  onChange={handleSearch}
                  placeholder="Start typing to search by tags"
                  className="w-full h-full bg-transparent px-5"
                />
                <div className="absolute right-5 top-[22%]">
                  <SearchIcon className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
              {filteredImages?.length > 0 ? (
                <ImagesList images={images} />
              ) : (
                <h1 className="text-3xl text-gray-400">No results found</h1>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};