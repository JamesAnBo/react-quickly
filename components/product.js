import React, { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super(props)
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.addToCart(this.props.name)
  }

  render () {
    console.log("this is the thing", this.props.name)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick}>Add</button>
      </div>
      )
  }

}

export default Product


// var { name } = this.props
