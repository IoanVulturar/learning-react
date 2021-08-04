import { SET_USER_DETAILS } from '../action-types'

export const setUserDetailsAction = (user) => {
  return {
    type: SET_USER_DETAILS,
    payload: user,
  }
}