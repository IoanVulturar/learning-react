import { SEARCH } from '../action-types'

const initialState = {
  value: ''
}

const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        value: payload
      }
  
    default:
      return state
  }
}

export default searchReducer