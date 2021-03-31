import {
  ADD_RESULT,
  FILTER_RESULT,
  CALC_ACTIVES,
  CALC_GAINERS,
  CALC_LOSERS,
} from './action-types';

export const addResult = (payload) => ({ type: ADD_RESULT, payload });
export const filterResult = (payload) => ({ type: FILTER_RESULT, payload });
export const calcActives = (payload) => ({ type: CALC_ACTIVES, payload });
export const calcGainers = (payload) => ({ type: CALC_GAINERS, payload });
export const calcLosers = (payload) => ({ type: CALC_LOSERS, payload });
