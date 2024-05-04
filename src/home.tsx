import { useState } from "react";
import "./slider.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "img/imagen1.png",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
  ];
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="slider-container">
        <h2 className="text-center fw-bold">Music House</h2>
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                left: `${index * 100}%`,
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              <img src={image} alt={`Instrumento ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          {""}
        </button>
        <button className="next" onClick={nextSlide}>
          {""}
        </button>
      </div>
      <div className="descripcion-container">
        <p className="descripcion m-4">
        "Descubre tu melodía perfecta: Bienvenido a nuestra tienda de instrumentos musicales. Encuentra inspiración en cada nota y déjate llevar por la magia de la música. Explora nuestra amplia selección de instrumentos de calidad y accesorios para músicos de todos los niveles. ¡Empieza tu viaje musical hoy mismo!"






        </p>
      </div>
    </>
  );
};

export default Home;
