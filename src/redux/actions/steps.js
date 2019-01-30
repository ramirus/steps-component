import { createAction } from 'redux-actions';
import * as t from '../constants/steps';

export const setCurrentStep = createAction(t.SET_CURRENT_STEP);
