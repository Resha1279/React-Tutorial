import { data } from "../../../data";

export const initialState = {
  modalContent: "",
  isModalOpen: false,
  people: data,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = [...state.people, action.payload];
      return {
        ...state,
        people: newItem,
        isModalOpen: true,
        modalContent: "item added",
      };

    case "DELETE_ITEM":
      const newList = state.people.filter(
        (people) => people.id !== action.payload
      );
      return {
        ...state,
        people: newList,
        isModalOpen: true,
        modalContent: "item deleted",
      };

    case "NO_ITEM":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please add some value",
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      throw new Error("no matching action type");
  }
};
