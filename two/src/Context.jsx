/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const Main = createContext();

export function MainCtxProvider(props) {
  const [movie, setMovie] = useState([]);

  const setMovieDetails = (data) => {
    setMovie(data);
  };

  const contextValue = {
    movie,
    setMovieDetails,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
