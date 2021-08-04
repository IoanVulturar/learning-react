import { connect } from 'react-redux'
import UserTable from '../UserTable'

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    usersList: state.usersList
  }
}

export default connect(mapStateToProps)(UserTable)
