import React from 'react'
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

const LoginFormContainer = ({ user, setUserDetails }) => {
  return (
      <LoginForm user={user} setUserDetails={setUserDetails}/>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
