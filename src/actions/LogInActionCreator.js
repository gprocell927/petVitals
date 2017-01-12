export const logIn = (username) => {
  return dispatch({
    type: 'LOG_IN',
    info: username,
    id
  }
}
