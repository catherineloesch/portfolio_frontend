import React from 'react';
import './Column.scss';

const Column = ({ type, img, alt, title, txt }) => {
  return (
    <div className={`column ${type}-column`}>
      <div className='column-img-container'>
        {/* <img src={img.src} alt={img.alt} title={img.title} /> */}
        {img.src}
      </div>

      <h2>{title}</h2>
      <p>{txt}</p>
    </div>
  );
};

export default Column;
