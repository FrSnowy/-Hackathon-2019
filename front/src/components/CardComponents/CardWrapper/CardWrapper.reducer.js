import constants from "./CardWrapper.constants";
const request = require('request');

const initialState = {
  cards: null,
  singleCard: null,
};

const CardsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case (constants.saveCards):
      return { ...state, cards: action.cards.reverse() }
    default: return state;
  }
}

export default CardsReducer;
