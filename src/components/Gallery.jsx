import { useContext } from "react";
import { FotoContext } from "../context/FotoContext";
import Button from "react-bootstrap/Button";
import IconHeart from "./IconHeart";
import Card from "react-bootstrap/Card";

const Gallery = () => {
  const { fotos, setFavoritas, view, favoritas } = useContext(FotoContext);

  const handleLike = (fotoId) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === fotoId);

    if (fotoIndex !== -1) {
      const updatedFotos = [...fotos];
    updatedFotos[fotoIndex].liked = !updatedFotos[fotoIndex].liked;
    setFavoritas(updatedFotos.filter((foto) => foto.liked));
    }
  };

  return (
    <div className={`gallery p-3 ${view === "Home" ? "grid-columns-5" : "grid-columns-5"}`}>
      {fotos.length > 0 ? (
        fotos.map((foto) => (
          <Card 
            className="photo"
            key={foto.id} 
            style={{
              width: "100%", 
              backgroundImage: `url(${foto.src.original})`,
            }}
          >
            <Button
              style={{
                alignSelf: `flex-end`,
                background: `transparent`,
                border: `none`,
              }}
              onClick={() => handleLike(foto.id)}
            >
              <IconHeart key={foto.id} filled={foto.liked} />
            </Button>
            <Card.Title>{foto.alt}</Card.Title>
          </Card>
        ))
      ) : (
        <h3>No has votado por ninguna foto 🖤</h3>
      )}
    </div>
  );
};

export default Gallery;
