import React from "react";
import "./BtnFill.scss";

const BtnFill = ({
  type,
  id,
  size,
  children,
  onClick,
  classNames,
  active,
  name,
}) => {
  //button fill effect
  function handleMouseOver(e) {
    const rect = e.target.getBoundingClientRect();

    // Calculate cursor's position relative to the button
    const x = e.clientX - rect.left; // Cursor's x coordinate within the button
    const y = e.clientY - rect.top; // Cursor's y coordinate within the button

    // Update CSS variables on the button to move the bubble
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  }

  return (
    <button
      type={type}
      className={`btn btn-fill ${classNames} btn-fill-${size} ${
        active === name ? "item-active" : ""
      }`}
      id={id}
      onMouseOverCapture={(e) => handleMouseOver(e)}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default BtnFill;
