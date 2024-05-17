import React from 'react'

const Cart = ({cartProducts}) => {
  var total = 0
  cartProducts.map((product)=>(
    total = total + product.item.cost
  ))
  return (
    <>
      <div class="container row" style={{margin: "auto"}}>
        {cartProducts.map((product) =>(
        <div class="m-2 col-5">
            <div class="card">
                <img src={product.item.pic} style={{height:"100px", width:"300px", margin:"auto"}}  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.item.name}</h5>
                  <h2>Price: {product.item.cost}</h2>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" class="btn btn-primary">+</button>
                  <button type="button" class="btn btn-primary">{product.item.quantity}</button>
                  <button type="button" class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
    ))}
            </div>
          <div class="jumbotron">
            <h1 class="dispaly-4">Total Cart Price: {total}</h1>
            <a href="#" class="btn btn-primary btn-lg" role='button'>Make A Payment</a>
          </div>
    </>
  )
}

export default Cart