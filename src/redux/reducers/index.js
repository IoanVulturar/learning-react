import { combineReducers } from 'redux'
import loggingReducer from './loggingReducer'
import searchReducer from './searchReducer'
import userReducer from './userReducer'
import usersListReducer from './usersListReducer'


const reducers = combineReducers({
  isLogged: loggingReducer,
  user: userReducer,
  usersList: usersListReducer,
  searchTerm: searchReducer
})

export default reducers