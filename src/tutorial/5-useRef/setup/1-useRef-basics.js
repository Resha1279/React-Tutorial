import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    refContainer.current.focus();
    console.log(refContainer.current);
  });
  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="name">name : </label>
          <input type="text" name="name" ref={refContainer} />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UseRefBasics;
