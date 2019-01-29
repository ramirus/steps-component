import { createStore } from 'redux'
import rootReducer from './rootReducers'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState)
}