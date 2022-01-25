import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
function TextColor() {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  useEffect(() => {
    dispatch({
      type: "setTextColor",
      val: val,
    });
  }, [val]);

  const customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const customWidth = {
    width:"70%",
  };


  return (
    <div style={customStyle}>
      <input
        type="color"
        name=""
        id=""
        value={val}
        style={customWidth}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
}
export default TextColor;
