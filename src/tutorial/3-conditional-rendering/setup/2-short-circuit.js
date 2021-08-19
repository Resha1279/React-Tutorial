import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("🐷");
  const [iserror, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsError(!iserror);
        }}
      >
        Toggle Error
      </button>

      {iserror && <h1>Error... 🙄</h1>}
    </>
  );
};

export default ShortCircuit;
