import React from 'react'
import { connect } from 'react-redux'
import Welcome from '../../components/Welcome'

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

const WelcomeContainer = ({ user }) => {
  return (
      <Welcome user={user} />
  )
}

export default connect(mapStateToProps)(WelcomeContainer)
