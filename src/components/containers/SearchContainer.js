import React from 'react'
import { connect } from 'react-redux'
import Search from '../Search'
import {searchAction} from '../../redux/actions/searchAction'
import {setUsersListAction} from '../../redux/actions/usersListAction'

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setSearchTerm: (term) => dispatch(searchAction(term)),
      setUsersList: (users) => dispatch(setUsersListAction(users))
  }
}

const SearchContainer = ({searchTerm, setSearchTerm, setUsersList}) => {
  return (
    <div>
      <Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setUsersList={setUsersList}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
