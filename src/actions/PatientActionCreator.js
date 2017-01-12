export const addPatient = (patients) => {
  return dispatch({
    type: 'ADD_PATIENT',
    info: patients,
    id
  })
}
