import constants from '../utils/firebaseClient'

export default const initialState = {
  auth: {
    currently: constants.ANONYMOUS,
    username: null,
    uid: null
  }
}
