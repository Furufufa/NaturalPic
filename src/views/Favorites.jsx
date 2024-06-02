import { useContext } from "react";
import { FotoContext } from "../context/FotoContext";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";

const Favorites = () => {
  const { favoritas } = useContext(FotoContext);

  return (
    <Container className="pt-5 d-flex flex-column align-items-center">
      <div className="App">
        <h1 className="mb-4 center-title" >Fotos Favoritas ❤️</h1>
        {favoritas.length > 0 ? (
        <Gallery view="Favorites" fotos={favoritas} />
        ) : (
          <h4>No has votado por ninguna foto aún 🥺</h4>
        )}
      </div>
    </Container>
  );
};
export default Favorites;


