import { createStore, combineReducers, applyMiddleware } from 'redux';
import CardsReducer from '../components/CardComponents/CardWrapper/CardWrapper.reducer';
import AppReducer from '../components/App/App.reducer';
import thunk from 'redux-thunk';
import AuthPopupReducer from '../components/AuthorizationPopup/AuthorizationPopup.reducer';

const rootReducer = combineReducers({
  app: AppReducer,
  cards: CardsReducer,
  authPopup: AuthPopupReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;