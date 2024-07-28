import React from 'react';
import './Column.scss';

const Column = ({ type, img, title, txt }) => {
  return (
    <div className={`column ${type}-column`}>
      <div className={`column-img-container ${img.className}`}>{img.src}</div>

      <h2 className='grad1'>{title}</h2>
      <p>{txt}</p>
    </div>
  );
};

export default Column;
