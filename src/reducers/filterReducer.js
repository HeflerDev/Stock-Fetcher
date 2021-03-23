import { FILTER_RESULT } from '../actions/action-types';

function filterReducer(state = [], action) {
  switch (action.type) {
    case FILTER_RESULT:
      return action.payload;
    default:
      return state;
  }
}

export default filterReducer;
