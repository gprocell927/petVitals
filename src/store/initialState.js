const C = require('../utils/constants')

const initialState = {
  auth: {
    currently: C.ANONYMOUS,
    username: null,
    uid: null
  }
}

export default initialState
