import { combineReducers, createStore } from 'redux';
import stocksReducer from '../reducers/stocksReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
  stocksReducer,
  filterReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState));

export default store;
