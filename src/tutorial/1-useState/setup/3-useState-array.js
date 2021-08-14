import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((item) => {
      return item.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => {
                removeItem(id);
              }}
            >
              Clear
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        type="button"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
