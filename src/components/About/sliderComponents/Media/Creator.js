import React from 'react';
import './Creator.scss';

const Creator = ({ item }) => {
  return (
    <div
      className={`about-creator ${item.className}`}
      key={`about-media-item-${item.className}`}
    >
      <p>{item.name}</p>

      <div className='img-container'>
        <img
          className={`${item.className}-img`}
          src={item.img}
          alt={item.alt}
        />
      </div>
    </div>
  );
};

export default Creator;
