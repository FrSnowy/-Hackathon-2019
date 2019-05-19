import constants from "./AuthorizationPopup.constants";

const initialState = {
  type: 'password',
  emailValue: '',
  passwordValue: '',
  invalidPassword: false,
};

const AuthPopupReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case (constants.toggleVisibility):
      return { ...state, type: action._type }
    case (constants.updateEmailValue):
      return { ...state, emailValue: action.value }
    case (constants.updatePasswordValue):
      return { ...state, passwordValue: action.value }
    default: return state;
  }
}

export default AuthPopupReducer;
