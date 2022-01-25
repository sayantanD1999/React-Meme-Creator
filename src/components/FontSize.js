import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function FontSize() {
  const dispatch = useDispatch();
  const [val, setVal] = useState(20);

  useEffect(() => {
    // console.log(txt);
    dispatch({
      type: "setFontSize",
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
      <span className="suf">12px</span>
      <input
        type="range"
        name=""
        min={12}
        max={30}
        id=""
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <span className="suf">30px</span>
    </div>
  );
}

export default FontSize;
