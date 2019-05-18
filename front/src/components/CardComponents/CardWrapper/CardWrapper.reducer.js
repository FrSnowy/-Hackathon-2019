import constants from "./CardWrapper.constants";

const initialState = {
  cards: null,
};

const CardsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case (constants.recieveCards):
      console.log(action);
      return { state, cards: action.cards }
    default: return state;
  }
}

export default CardsReducer;
