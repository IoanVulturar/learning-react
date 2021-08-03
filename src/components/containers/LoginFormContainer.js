import { connect } from 'react-redux'
import LoginForm from '../../views/LoginForm'
import {setUserDetailsAction} from '../../redux/actions/userActions'

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setUserDetails: (user) => dispatch(setUserDetailsAction(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
