import React from 'react';
import { BsEyeFill } from 'react-icons/bs';

import './Card.scss';

const Card = ({
  type,
  img,
  alt,
  txt,
  onClick,
  imgEffects,
  overlayEffects,
  overview,
}) => {
  return (
    <div className={`card ${type}-card`}>
      <div className={`${type}-card__img-container`}>
        <img
          className={`${type}-card__img ${imgEffects}`}
          src={img}
          alt={alt}
        />
        <div className={`${type}-card__img-overlay ${overlayEffects}`}>
          <div className={`${type}-card__img-overlay__overview`}>
            {overview.map((txt) => (
              <p key={`${txt}-overview`}>{txt}</p>
            ))}
          </div>

          <button className='project-card__img-overlay__btn' onClick={onClick}>
            <div className='project-card__img-overlay__btn-icon-container'>
              <BsEyeFill className='work-icon' />
            </div>
          </button>
        </div>
      </div>
      <div className={`${type}-card__txt-container`}>
        <h4>{txt}</h4>

        <div className={`${type}-card__img-overlay-mobile ${overlayEffects}`}>
          <div className={`${type}-card__img-overlay__overview`}>
            {overview.map((txt) => (
              <p key={`${txt}-overview`}>{txt}</p>
            ))}
          </div>

          <button className='project-card__img-overlay__btn' onClick={onClick}>
            <div className='project-card__img-overlay__btn-icon-container'>
              <BsEyeFill className='work-icon' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
