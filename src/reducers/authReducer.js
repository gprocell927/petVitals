import initialState from '../store/initialState'

const C = require('../utils/constants')

const authReducer = (currentState, action) => {
  switch(action.type){
    case C.ATTEMPTING_LOGIN:
    //user entered credentials and is waiting for a response
      return {
        currently: C.AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null
      }
    case C.LOGOUT:
    // discard current user credentials and reenter guest mode
      return {
        currently: C.ANONYMOUS,
        username: 'guest',
        uid: null
      }
    case C.LOGIN_USER:
    // a successful LogIn
      return {
        currently: C.LOGGED_IN,
        username: action.username,
        uid: action.uid
      }
      default: return currentState || initialState.auth
  }
}

export default authReducer
