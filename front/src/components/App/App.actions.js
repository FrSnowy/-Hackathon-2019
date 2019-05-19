import constants from "./App.constants";
const request = require('request');

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
  },
  sendAuthRequest: (email, password) => dispatch => {
    request.post({
      url: constants.REQUEST_URL + "api/v1/sessions",
      form: {user: { email, password }}
    }, (err, response) => {
      const { token } = JSON.parse(response.body);
      if (token) dispatch({
        type: constants.saveToken,
        token,
      })
    });
  },
  sendRegisterRequest: (email) => dispatch => {
    request.post({
      url: constants.REQUEST_URL + "api/v1/users",
      form: { user: { email }}
    }, (err, response) => {
      const { token } = JSON.parse(response.body);
      if (token) dispatch({
        type: constants.saveToken,
        token,
      });
    })
  }
};

export default AppActions;