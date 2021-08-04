import { SEARCH } from '../action-types'

export const searchAction = (term) => {
  return {
    type: SEARCH,
    payload: term
  }
}