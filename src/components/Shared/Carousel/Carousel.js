import React from "react";
import "./Carousel.scss";
import { arrowIcons } from "../../../assets/icons/icons_arrows";

const Carousel = ({ section, imgData, type }) => {
  console.log("img");
  console.log(imgData[0].type);
  return (
    <div className={`${type}-carousel`}>
      <img
        className={`${imgData[0].type}`}
        src={imgData[0].img}
        alt={imgData[0].title}
      />
      <div className="carousel-btns">
        <img
          className="carousel-arrow"
          src={arrowIcons.arrowLeft}
          alt="go to previous image"
        />
        <img
          className="carousel-arrow"
          src={arrowIcons.arrowRight}
          alt="go to next image"
        />
      </div>
    </div>
  );
};

export default Carousel;
