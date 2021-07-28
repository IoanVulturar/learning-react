import React from 'react'
import { connect } from 'react-redux'
import UserTable from '../UserTable'

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    usersList: state.usersList
  }
}

const UserTableContainer = ({searchTerm, usersList}) => {
  return (
    <div>
      <UserTable searchTerm={searchTerm} usersList={usersList} />
    </div>
  )
}

export default connect(mapStateToProps)(UserTableContainer)
