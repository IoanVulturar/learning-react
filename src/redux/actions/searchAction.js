export const searchAction = (term) => {
  return {
    type: 'search',
    payload: term
  }
}