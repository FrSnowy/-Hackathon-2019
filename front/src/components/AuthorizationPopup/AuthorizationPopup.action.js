import constants from "./AuthorizationPopup.constants";

const AuthActions = {
  toggleVisibility: (type) => {
    return {
      type: constants.toggleVisibility,
      _type: type,
    }
  },
  updateEmailValie: (value) => {
    return {
      type: constants.updateEmailValue,
      value: value,
    }
  },
  updatePasswordValue: (value) => {
    return {
      type: constants.updatePasswordValue,
      value,
    };
  },
};

export default AuthActions;