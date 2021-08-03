import { connect } from 'react-redux'
import Profile from '../Profile'
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
