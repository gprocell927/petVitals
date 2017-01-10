export const addReading = (readings) => {
  return dispatch({
    type: 'ADD_READING',
    info: readings,
    id
  }
}
