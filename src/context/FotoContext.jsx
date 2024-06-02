import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const FotoContext = createContext();

export const FotoProvider = ({ children }) => {
  const [fotos, setFotos] = useState([]);
  const [favoritas, setFavoritas] = useState([]);
  const [view, setView] = useState("Home");

  const fetchFotos = async () => {
    const fotosFetched = await fetch("/photos.json");
    const { photos } = await fotosFetched.json();
    setFotos(photos);
  };

  const Favorites = (foto) => {
    if (favoritas.some((fav) => fav.id === foto.id)) {
      setFavoritas(favoritas.filter((fav) => fav.id !== foto.id));
    } else {
      setFavoritas([...favoritas, foto]);
    }
  };


  useEffect(() => {
    fetchFotos();
  }, []);

  return (
    <FotoContext.Provider
      value={{ fotos, setFotos, favoritas, setFavoritas, view, setView }}
    >
      {children}
    </FotoContext.Provider>
  );
};

FotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FotoProvider;




