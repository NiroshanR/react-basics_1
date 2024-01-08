import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class Card2 extends Component {

  constructor(props){
    super(props);
    this.state = {
        stockCount: this.props.stock
    }
    this.decrementStock = () =>{
        this.setState({
            stockCount: this.state.stockCount - 1
        })
    }
  }  

  render() {
    return (
        <div className = "Card">
        <h1>{this.props.title}</h1>
        <p className = "price">${this.props.price}</p>
        <p>In stock: {this.state.stockCount}</p>
        <p><button onClick={this.decrementStock}>Add to Cart</button></p> 
        {/* <button onClick={resetStock}>Reset</button> */}
    </div>
    )
  }
}

Card2.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    stock: PropTypes.number

}

Card2.defaultProps= {
    title: 'Cuvette Basics',
    price: 0,
    stock: 0
}