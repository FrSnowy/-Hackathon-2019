import constants from "./App.constants";

const initialState = {
  isLoggedIn: false,
  token: null,
};

const AppReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case (constants.login):
      return { ...state, isLoggedIn: action.isLoggedIn }
    case (constants.logout):
      return { ...state, isLoggedIn: action.isLoggedIn }
    case (constants.saveToken):
      return { ...state, token: action.token }
    default: return state;
  }
}

export default AppReducer;
