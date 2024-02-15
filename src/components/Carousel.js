import React, { useState } from 'react';

const Carousel = ({ slides }) => { // pass an array of slide images as a prop
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      <div className="slide">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
