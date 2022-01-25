import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Axis() {
  const dispatch = useDispatch();
  const set_sample = (e) => {
    console.log(e);
    dispatch({
      type: "setAxis",
      val: e,
    });
  };
  return (
    <div>
      <label htmlFor="">Select Axis</label>
      <div
        onChange={(e) => {
          set_sample(e.target.value);
        }}
      >
        Y-Axis
        <input
          type="radio"
          value="rotateY"
          name="axis"
          className="axis"
          id=""
        />
        X-Axis
        <input
          type="radio"
          value="rotateX"
          name="axis"
          className="axis"
          id=""
        />
      </div>
    </div>
  );
}

export default Axis;
