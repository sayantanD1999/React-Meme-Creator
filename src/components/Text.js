import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Text() {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState("Sample Text");

  useEffect(() => {
    console.log(txt);
    dispatch({
      type: "setText",
      val: txt,
    });
  }, [txt]);

  const customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  return (
    <div style={customStyle}>
      <input
        type="text"
        id="ip_text"
        maxLength={200}
        value={txt}
        onChange={(e) => {
          setTxt(e.target.value);
        }}
      />
    </div>
  );
}

export default Text;
