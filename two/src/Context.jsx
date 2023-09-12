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

  const handleFavorites = ( data) => {
    if (favorites.length > 0) {
      favorites.map((el) => {
        console.log(el, data.id);
        if (favorites.includes(data.id)) {
          console.log('one');
          setFavorites((p) => p.filter((item) => item !== data.id));
        } else {
          console.log('two');
          setFavorites((p) => [...p, data.id]);
        }
      });
      return;
    } else {
      console.log("here")
      setFavorites((p) => [...p, data.id]);
    }
  };

  console.log(favorites);

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
