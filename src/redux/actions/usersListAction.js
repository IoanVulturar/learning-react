import { SET_USERS_LIST } from '../action-types'

export const setUsersListAction = (users) => {
  return {
    type: SET_USERS_LIST,
    payload: users
  }
}