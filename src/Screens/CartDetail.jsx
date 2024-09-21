import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useLocation, useParams } from 'react-router-dom'
import HoverRating from '../components/Rating/Rate';
import Footer from '../components/Footer/Footer'

const CartDetail = () => {
 const {id} = useParams()
 console.log(id)

const location =  useLocation()
const {product} = location.state // Access the product passed via state

console.log(product)


  return (
   <>
   <Navbar/>
   <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 100 }}>
      <div style={{ width: 300 }}>
        <img width="100%" src={product.image} alt={product.title} />
      </div>
      <div style={{ width: 500 }}>
        <h3>{product.title}</h3>
        <h6>{product.category}</h6>
        <p>{product.description}</p>
        <h5>$ {product.price}</h5>
        <div style={{ textAlign: 'center' }}>
          <HoverRating />
        </div>
      </div>
    </div>

    <Footer />


   </>
  )
}

export default CartDetail;