import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer, initialState } from "./reducer";

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_ITEM" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleOnRemoveItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="first-name">name : </label>
          <input
            type="text"
            name="first-name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        {state.people.map((person) => {
          return (
            <div className="item">
              <h4 key={person.id}>{person.name}</h4>
              <button onClick={() => handleOnRemoveItem(person.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
