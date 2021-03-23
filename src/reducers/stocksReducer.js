import { ADD_RESULT } from '../actions/action-types';

function stocksReducer(state = null, action) {
  switch (action.type) {
    case ADD_RESULT:
      return action.payload;
    default:
      return state;
  }
}

export default stocksReducer;
