import { SET_USER_DETAILS } from '../action-types'

const initialUserState = {
  id: '',
  userName: '',
  email: '',
  password: '',
  phoneNumber: '',
  role: ''
}

const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case SET_USER_DETAILS:
      state = {
        ...state,
        id: payload._id,
        userName: payload.userName,
        email: payload.email,
        password: payload.password,
        phoneNumber: payload.phoneNumber,
        role: payload.role
      }
      return state

    default:
      return state
  }
}

export default userReducer