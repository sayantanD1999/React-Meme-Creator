import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Flip() {
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const set_sample = (e) => {
    setVal(e.target.value);
    dispatch({
      type: "setFlip",
      val: val,
    });
  };

  return (
    <div>
      <input
        type="range"
        name=""
        id=""
        min={0}
        step={1}
        max={360}
        value={val}
        onChange={set_sample}
      />

    </div>
  );
}

export default Flip;
