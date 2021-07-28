import React from 'react'
import { connect } from 'react-redux'
import TableRow from '../TableRow'
import {setUsersListAction} from '../../redux/actions/usersListAction'

const mapStateToProps = state => {
  return {
    usersList: state.usersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setUsersList: (users) => dispatch(setUsersListAction(users))
  }
}

const TableRowContainer = ({user, usersList, setUsersList}) => {
  return (
      <TableRow user={user} usersList={usersList} setUsersList={setUsersList} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRowContainer)
