const PatientReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PATIENT':
      return [...state, {
        id: action.id,
        text: action.text,
        ...action.info
      }]

      default:
      return state
  }
}

export default PatientReducer
