import React from "react";
import color_wheel from "../assets/color-wheel.png";
import color_palette from "../assets/color-palette.png";
import color_marker from "../assets/markers.png";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <img src={color_wheel} alt="Color Wheel" width="45px" />
      <img src={color_palette} alt="" width="45px" />
      <img src={color_marker} alt="" width="45px" />
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
      />
      <img src={color_marker} alt="" width="45px" />
      <img src={color_palette} alt="" width="45px" />
      <img src={color_wheel} alt="" width="45px" />
    </div>
  );
};

export default ShadeInput;
