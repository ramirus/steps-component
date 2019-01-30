import { handleActions } from 'redux-actions';
import * as t from '../constants/steps';

export const reducers = {
  [t.SET_CURRENT_STEP]: (state, { payload }) =>
    ({
      ...state,
      current: payload,
    }),
};

export const initialState = () => {
  const state = {
    current: 0,
  };
  return state;
};

export default handleActions(reducers, initialState());
