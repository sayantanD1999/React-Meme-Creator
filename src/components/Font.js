import React from "react";
import { useDispatch } from "react-redux";
function Font() {
  const dispatch = useDispatch();
  const set_sample = (e) => {
    var val = document.getElementById("drpdwn").value;
    console.log(val);
    dispatch({
      type: "setFont",
      val: val,
    });
  };

  const customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={customStyle}>
      <select name="" id="drpdwn"  onChange={set_sample}>
        <option value="san-serif"> San Serif </option>
        <option value="cursive"> Cursive </option>
        <option value="monospace"> Monospace </option>
        <option value="fantasy"> Fantasy </option>
      </select>
    </div>
  );
}

export default Font;
