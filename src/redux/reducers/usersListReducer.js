import { SET_USERS_LIST } from '../action-types'

const initialUsersList = {
  users: []
}

const usersListReducer = (state = initialUsersList, { type, payload }) => {
  switch (type) {
    case SET_USERS_LIST:
      return {
        ...state,
        users: payload
      }
  
    default:
      return state
  }
}

export default usersListReducer