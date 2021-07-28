import React from 'react'
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

const ProfileContainer = ({user, setUserDetails}) => {
  return (
    <div>
      <Profile user={user} setUserDetails={setUserDetails}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
