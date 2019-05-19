import constants from "./App.constants";

const AppActions = {
  login: () => {
    return {
      type: constants.login,
      isLoggedIn: true,
    }
  },
  logout: () => {
    return {
      type: constants.logout,
      isLoggedIn: false,
    }
  }
};

export default AppActions;