import React from "react";

function Image(props) {
  const wow = (e) => {
    console.log(e);
  };
  return (
    <div>
      <img src={props.link} onClick={() => {wow(props.link)}} />
    </div>
  );
}

export default Image;
