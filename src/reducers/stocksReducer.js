import { ADD_RESULT } from '../actions/action-types';

function stocksReducer(state = null, action) {
  switch (action.type) {
    case ADD_RESULT:
      if (Array.isArray(action.payload)) {
        const [result] = action.payload;
        return result;
      };
      return action.payload;
    default:
      return state;
  }
}

export default stocksReducer;
