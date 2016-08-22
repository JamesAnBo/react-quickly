var clone = require('clone')
const initialState = {count:0}

const shopping = (state, action) => {
  state = state || initialState
  let newState = clone(state)

  switch (action.type) {
    case 'ADD_TO_COUNT':
      newState.count++
      return newState

    // case 'ADD_TO_TROLLEY'

    case 'SUBTRACT_FROM_COUNT':
      newState.count--
      return newState

    default:
      return state
  }
}

module.exports = shopping
