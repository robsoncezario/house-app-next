import {
  combineReducers,
  createStore
} from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import placesReducer from './places/reducer'

const rootReducer = combineReducers({
  places: placesReducer
})

const initStore = () => {
  return createStore(rootReducer, composeWithDevTools())
}

export const storeWrapper = createWrapper(initStore, { debug: false })
