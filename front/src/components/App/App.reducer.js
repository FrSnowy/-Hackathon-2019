import constants from "./App.constants";

const initialState = {
  isLoggedIn: true,
};

const AppReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case (constants.login):
      return { state, isLoggedIn: action.isLoggedIn }
    case (constants.logout):
      return { state, isLoggedIn: action.isLoggedIn }
    default: return state;
  }
}

export default AppReducer;
