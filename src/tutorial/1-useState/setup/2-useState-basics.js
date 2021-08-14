import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");

  const handleClick = () => {
    setText("Changed");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
