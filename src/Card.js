import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default function Card({title, price, stock}) {
    let prevStock = stock;
    let [stockCount, setStockCount] = useState(stock);
  function decrementStock(params) {
    setStockCount(--stockCount);
    console.log(stockCount);
  }  

  function resetStock(){
    setStockCount(prevStock);
  }
  return (
    <div className = "Card">
        <h1>{title}</h1>
        <p className = "price">{price}</p>
        <p>In stock: {stockCount}</p>
        <p><button onClick={decrementStock}>Add to Cart</button></p> 
        {/* <button onClick={resetStock}>Reset</button> */}
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    stock: PropTypes.number

}

Card.defaultProps= {
    title: 'Cuvette Basics',
    price: 0,
    stock: 0
}
