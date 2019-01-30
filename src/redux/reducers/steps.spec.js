import { reducers, initialState } from './steps'
import * as t from '../constants/steps'

describe('steps reducer', () => {

  it('SET_CURRENT_STEP', () => {
    const newCurrent = 2;

    const action = {
      type: t.SET_CURRENT_STEP,
      payload: newCurrent,
    }

    expect(reducers[t.SET_CURRENT_STEP](initialState, action)).toEqual({
      ...initialState,
      current: newCurrent,
    })
  })

})