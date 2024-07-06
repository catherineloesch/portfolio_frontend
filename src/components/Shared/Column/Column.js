import React from "react";
import "./Column.scss";

const Column = ({ type, img, alt, title, txt }) => {
  return (
    <div className={`column ${type}-column`}>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{txt}</p>
    </div>
  );
};

export default Column;
