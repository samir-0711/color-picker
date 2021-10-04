import React, { useState, useEffect, useRef } from "react";
import Values from "values.js";
import Shade from "./Shade";
import isColor from "is-color";

const Shades = ({ color }) => {
  const audioRef = useRef();
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) createShades(color);
  }, [color]);

  const createShades = (color) => {
    let count = 0;
    for (let i = 0; i < color.length; i++) {
      if (color[i] === "#") {
        count++;
      }
    }
    color = count > 1 ? "#000000" : color;
    const shades_color = new Values(color);
    let shades = shades_color.shades(1);
    // console.log(shades[0].rgbString());

    setShades(shades);
  };

  const onColorCopy = () => {
    audioRef.current.play();
  };
  return (
    <div className="shades">
      <audio ref={audioRef} src={require("../assets/sound.mp3")} />
      {shades.map((shade, index) => (
        <Shade shade={shade} onColorCopy={onColorCopy} key={index} />
      ))}
    </div>
  );
};

export default Shades;
