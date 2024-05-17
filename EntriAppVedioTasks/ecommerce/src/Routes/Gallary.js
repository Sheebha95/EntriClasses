import React from 'react'

const Gallary = ({productItems,handleAddToCart}) => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src="https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style="height: 600px;" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style="height: 600px;" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style="height: 600px;" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className='row container' style={{margin:"auto"}}>
        {productItems.map((product)=>(

          <div class="card col-4" style={{margin: "20px"}}>
            <img src={product.pic} style={{height:"250px"}} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">Some quick example text to build on the Product Name and make up the bulk of the card's content.</p>
              <button onClick={()=>handleAddToCart(product)} type="button" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>




        ))}

      </div>

    </>
  )
}

export default Gallary