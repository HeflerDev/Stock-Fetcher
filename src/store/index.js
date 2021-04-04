import { combineReducers, createStore } from 'redux';
import stocksReducer from '../reducers/stocksReducer';
import filterReducer from '../reducers/filterReducer';
import statisticsReducer from '../reducers/statisticsReducer';

const rootReducer = combineReducers({
  stocksReducer,
  filterReducer,
  statisticsReducer,
});

const store = createStore(rootReducer);

export default store;
