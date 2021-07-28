import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

const NavbarContainer = ({ user }) => {
  return (
      <Navbar user={user} />
  )
}

export default connect(mapStateToProps)(NavbarContainer)
