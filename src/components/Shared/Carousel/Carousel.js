import React, { useState } from "react";
import "./Carousel.scss";
import { arrowIcons } from "../../../assets/icons/icons_arrows";

const Carousel = ({ imgData, type }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === imgData.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(imgData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className={`${type}-carousel`}>
      <div className="carousel-container">
        {imgData.map((img, index) => (
          <div
            className={`slide ${
              index === slideIndex ? "slide-active" : "slide-hidden"
            }`}
            key={`carousel-slide-${img.id}`}
          >
            <img
              className={`${img.type} slide-img`}
              src={img.src}
              alt={img.title}
            />
          </div>
        ))}
        <div className="btns-carousel">
          <button onClick={prevSlide} className="btn-carousel-prev">
            {arrowIcons.arrowLeft}
          </button>
          <button onClick={nextSlide} className="btn-carousel-next">
            {arrowIcons.arrowRight}
          </button>
        </div>
      </div>

      <div className="dots-carousel">
        {imgData.map((img, index) => (
          <div
            key={`carousel-dot-${index}`}
            className={`dot-carousel ${
              index === slideIndex ? "active" : "inactive"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
