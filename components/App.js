import React from 'react'
import Product from './product'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    //whenever 'this' is referred to we are talking about this right here - in this code.prevents product component getting confused with other
    //functions that haven't been bound. Use bind when delegating functions. Bind is always done where you want this to refer to.
    this.addToCart = this.addToCart.bind(this)
    this.subtractFromCount = this.subtractFromCount.bind(this)
  }

  displayCart () {
    return this.props.state.cart.map(function(item){
      return <p>{item}</p>
    })
  }

  addToCart (item) {
    this.props.store.dispatch(
      {type: 'ADD_TO_CART', item:item}
    )
  }
// //creat item in cart component
//   removeFromCart

  subtractFromCount () {
    this.props.store.dispatch(
      {type: 'SUBTRACT_FROM_COUNT'}
    )
  }



  render () {
    console.log("state", this.props.state)
    return (
      <div>
        <h1>Shopping List</h1>
        {this.displayCart()}
        <Product name="Apples" addToCart={this.addToCart}/>
        <Product name="Elves" addToCart={this.addToCart}/>
        <button onClick={this.subtractFromCount}>Subtract</button>
      </div>
    )
  }
}
  //this is in charge of rendering things and delegating functions
