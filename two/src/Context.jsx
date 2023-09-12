/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const Main = createContext();

export function MainCtxProvider(props) {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const setMovieDetails = (data) => {
    setMovie(data);
  };

  const handleFavorites = (data) => {
    favorites.length > 0
      ? favorites.includes(data.id)
        ? setFavorites((p) => p.filter((item) => item !== data.id))
        : setFavorites((p) => [...p, data.id])
      : setFavorites((p) => [...p, data.id]);
    setFavoritesList((p) => [...p, data]);
  };

  console.log(favorites);
  console.log(favoritesList)

  const contextValue = {
    movie,
    input,
    favorites,
    setInput,
    setMovieDetails,
    handleFavorites,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
