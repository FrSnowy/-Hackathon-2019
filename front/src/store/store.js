import { createStore, combineReducers } from 'redux';
import CardsReducer from '../components/CardComponents/CardWrapper/CardWrapper.reducer';
import AppReducer from '../components/App/App.reducer';

const rootReducer = combineReducers({
  app: AppReducer,
  cards: CardsReducer,
});

const store = createStore(rootReducer);

export default store;