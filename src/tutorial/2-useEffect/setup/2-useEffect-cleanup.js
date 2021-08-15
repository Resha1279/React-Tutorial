import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });

    //cleanup function
    return window.removeEventListener("resize", () => {});
  });

  return (
    <>
      <h1>Window Size</h1>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
