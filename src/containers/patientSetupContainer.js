import { connect } from 'react-redux'
import patientSetup from '../components/PatientSetup'
import { addPatient } from '../actions/PatientActionCreator'

const mapStateToProps = (state) => {
  return { patients: state.patients }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (info) => {
      dispatch(addPatient(info))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(patientSetup)
