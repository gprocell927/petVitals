import { combineReducers } from 'redux'
import readingsReducer from './ReadingReducer'
import authReducer from './authReducer'


const reducers = combineReducers({
  readingsReducer,
  authReducer
})

export default reducers
