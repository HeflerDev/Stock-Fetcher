import { createStore } from 'redux';
import stocksReducer from '../reducers/stocksReducer';

const store = createStore(stocksReducer);
store.subscribe(() => console.log(store.getState));

export default store;
