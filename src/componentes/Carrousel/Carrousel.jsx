import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Carrousel = ({ images }) => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, [images]);

  const total = shuffledImages.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  if (total === 0) return <div className="carousel-empty">No hay imágenes</div>;

  return (
    <div className="carousel-container">
      <img src={shuffledImages[current]} alt={`Imagen ${current + 1}`} className="carousel-image" />
      <button className="carousel-button left" onClick={prev}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={next}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {shuffledImages.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
