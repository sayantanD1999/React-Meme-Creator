import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Rotation() {
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);

  useEffect(() => {
    // console.log(txt);
    dispatch({
      type: "setRotate",
      val: val,
    });
  }, [val]);

  const customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={customStyle}>
      <span className="suf">0</span>
      <input
        type="range"
        name=""
        id=""
        min={0}
        step={1}
        max={360}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <span className="suf">360</span>
    </div>
  );
}

export default Rotation;
