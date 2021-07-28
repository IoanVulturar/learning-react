import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import userReducer from './userReducer'
import usersListReducer from './usersListReducer'

const reducers = combineReducers({
  user: userReducer,
  usersList: usersListReducer,
  searchTerm: searchReducer
})

export default reducers