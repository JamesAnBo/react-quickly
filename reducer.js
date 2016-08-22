var clone = require('clone')
const initialState = {cart:[]}
//cart is state and therefor will live in reducer

const shopping = (state, action) => {
  state = state || initialState
  let newState = clone(state)

  switch (action.type) {
    case 'ADD_TO_CART':
      newState.cart.push(action.item)
      return newState

    // case 'ADD_TO_TROLLEY'

    // case 'SUBTRACT_FROM_CART':
    //   newState.count--
    //   return newState

    default:
      return state
  }
}

module.exports = shopping

//this is where we are manipulating state of the app
