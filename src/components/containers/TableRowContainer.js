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

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)
