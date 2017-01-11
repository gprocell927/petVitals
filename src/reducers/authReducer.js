import constants from '../utils/firebaseClient'
import initialState from '../store/initialState'

export default const authReducer = (currentState, action) => {
  switch(action.type){
    case constants.ATTEMPTING_LOGIN:
    //user entered credentials and is waiting for a response
      return {
        currently: constants.AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null
      }
    case constants.LOGOUT:
    // discard current user credentials and reenter guest mode
      return {
        currently: constants.ANONYMOUS,
        username: 'guest',
        uid: null
      }
    case constants.LOGIN_USER:
    // a successful LogIn
      return {
        currently: constants.LOGGED_IN,
        username: action.username,
        uid: action.uid
      }
      default: return currentState || initialState.auth
  }
}
