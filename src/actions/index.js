import { ADD_RESULT, FILTER_RESULT } from './action-types'; 

export const addResult = payload => ({ type: ADD_RESULT, payload });
export const filterResult = payload => ({ type: FILTER_RESULT, payload });
