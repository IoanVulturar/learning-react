const loggingReducer = (state = false, { type }) => {
  switch (type) {
    case 'logging':
      return !state

    default:
      return state
  }
}

export default loggingReducer