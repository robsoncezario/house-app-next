import {
  combineReducers,
  createStore
} from 'redux'
import placesReducer from './places/reducer'

const store = createStore(combineReducers({
  places: placesReducer
}))

export default store
