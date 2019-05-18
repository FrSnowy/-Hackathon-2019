import { createStore, combineReducers } from 'redux';
import CardsReducer from '../components/CardComponents/CardWrapper/CardWrapper.reducer';

const rootReducer = combineReducers({
  cards: CardsReducer,
});

const store = createStore(rootReducer);

export default store;