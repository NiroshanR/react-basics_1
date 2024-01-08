import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Card2 from './Card2';

// let arr = [[2,45,47,58],[7,88,45,78]];
// arr.map((item) =>{
//   return item.map((subItems) =>{
//     return console.log(subItems);
//   });
// })

let productArr = [
  {id:1001,title: "Shoes", price: 20, stock: 10},
  {id:1002,title: "Hoodies", price: 25,stock: 55},
  {id:1003,title: "Sneakers", price: 30, stock: 56}
];

productArr.map((item) =>{
  console.log(item.id)  
})

function App() {
  return (
    <div>
      <Header/>
      {/* <Card title={'Shoes'} price={20}/>
       <Card title={'Shirts'} price={'$10'}/>
      <Card title={'Pants'} price={'$20'}/>
      <Card price={'$15'}/> */}

      {
        productArr.map((product,index) => (
          <Card2 key = {product.id} title= {product.title} price={product.price} stock={product.stock}/>
        ))
      }
      <Footer/>
    </div>
    
  );
}

export default App;
