import constants from "./CardWrapper.constants";
const request = require('request');

const CardsActions = {
  recieveCards: () => dispatch => {
    request.get(constants.REQUEST_URL + "api/v1/events", (err, resp) => {
      if (resp) dispatch({
        type: constants.saveCards,
        cards: JSON.parse(resp.body)
      }); else dispatch({
        type: constants.saveCards,
        cards: 'no-server',
      });
    })
  },
};

export default CardsActions;