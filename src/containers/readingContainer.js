import { connect } from 'react-redux'
import Reading from '../components/Reading'
import { addReading } from '../actions/ReadingActionCreator'

const mapStateToProps = (state) => {
  return { readings: state.readings }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (info) => {
      dispatch(addReading(info))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reading)
