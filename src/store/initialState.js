import constants from '../utils/firebaseClient'

const initialState = {
  auth: {
    currently: constants.ANONYMOUS,
    username: null,
    uid: null
  }    
}
