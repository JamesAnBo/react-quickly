import clone from 'clone'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_COUNT':
      let newState = clone(state)
      newState.count++
      return newState

    default:
      return state
  }
}
