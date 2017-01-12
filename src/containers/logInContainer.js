import { connect } from 'react-redux'
import LogIn from '../components/LogIn'
import { logIn } from '../actions/LogInActionCreator'

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (info) => {
      dispatch(logIn(info))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
