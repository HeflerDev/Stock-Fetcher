import { CALC_ACTIVES, CALC_LOSERS, CALC_GAINERS } from '../actions/action-types';

const defaultState = {
  actives: null,
  gainers: null,
  losers: null,
};

function statisticsReducer(state = defaultState, action) {
  const newState = { ...state };
  switch (action.type) {
    case CALC_ACTIVES:
      newState.actives = action.payload.slice(0, 3);
      return newState;
    case CALC_GAINERS:
      newState.gainers = action.payload.slice(0, 3);
      return newState;
    case CALC_LOSERS:
      newState.losers = action.payload.slice(0, 3);
      return newState;
    default:
      return state;
  }
}

export default statisticsReducer;
