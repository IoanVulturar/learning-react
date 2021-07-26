const initialState = {
  value: ''
}

const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'search':
      return {
        ...state,
        value: payload
      }
  
    default:
      return state
  }
}

export default searchReducer