import React from "react";
import { BsEyeFill } from "react-icons/bs";

import "./Card.scss";

const Card = ({ type, img, alt, txt, onClick, imgEffects, overlayEffects }) => {
  return (
    <div className={`card ${type}-card`}>
      <div className={`${type}-card__img-container`}>
        <img
          className={`${type}-card__img ${imgEffects}`}
          src={img}
          alt={alt}
        />
        <div className={`${type}-card__img-overlay ${overlayEffects}`}>
          <button className="project-card__img-overlay__btn" onClick={onClick}>
            <div className="project-card__img-overlay__btn-icon-container">
              <BsEyeFill className="work-icon" />
            </div>
          </button>
        </div>
      </div>
      <div className={`${type}-card__txt-container`}>
        <h4>{txt}</h4>
      </div>
    </div>
  );
};

export default Card;
