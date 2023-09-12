/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const Main = createContext();

export function MainCtxProvider(props) {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState([]);

  const setMovieDetails = (data) => {
    setMovie(data);
  };

  const handleFavorites = (data) => {
    setFavorites(p => [...p, data.id,])
  }
  
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
