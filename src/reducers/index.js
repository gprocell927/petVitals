import { combineReducers } from 'redux'
import readingsReducer from './ReadingReducer'
import authReducer from './authReducer'
import PatientReducer from './PatientReducer'


const reducers = combineReducers({
  readingsReducer,
  authReducer,
  PatientReducer
})

export default reducers
