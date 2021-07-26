const initialUsersList = {
  users: []
}

const usersListReducer = (state = initialUsersList, { type, payload }) => {
  switch (type) {
    case 'setUsersList':
      return {
        ...state,
        users: payload
      }
  
    default:
      return state
  }
}

export default usersListReducer