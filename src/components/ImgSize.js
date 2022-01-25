import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function ImgSize() {
  const dispatch = useDispatch();
  const [height, setHeight] = useState(60);
  const [width, setWidth] = useState(60);

  useEffect(() => {
    var val = {
      height: height,
      width: width,
    };
    dispatch({
      type: "size",
      val: val,
    });
  }, [height, width]);

  const customStyle = {
    color: "#fff",
  };


  const ip = {
    marginLeft:"30px",
  };


  return (
    <div>
      <div>
        <span style={customStyle}>Height</span>
        <input
          type="range"
          name=""
          id=""
          min={50}
          step={1}
          max={100}
          value={height}
          style={ip}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>
      <div>
        <span style={customStyle}>Width</span>
        <input
          type="range"
          name=""
          id=""
          min={50}
          step={1}
          max={100}
          value={width}
          style={ip}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ImgSize;
