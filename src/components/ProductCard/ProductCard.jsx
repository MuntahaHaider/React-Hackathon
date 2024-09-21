import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { addCartFunc, cartdetailFunc, removeCartFunc } from '../../store/slices/addCartSlice'
import Footer from '../Footer/Footer'

const ProductCard = ({e,img,categary,title,desc,product,removeCart,}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const {id} = useParams()
  // console.log(id)

  const [isAdded, setIsAdded] = useState(false); 

  const addCart = (e)=>{
    e.preventDefault();
    dispatch(addCartFunc(product))
    setIsAdded(true)

  }

  
  const handledetail = (e)=>{
    e.preventDefault();
    const singleProductObj = {
      product,
    }
    console.log(singleProductObj)
    // dispatch(cartdetailFunc(product))
    console.log(product)
    navigate(`/product/productDetail/${product.id}`, {state : {product} }) ;     
  }

  const removeCard = (e)=>{
    e.preventDefault();
    dispatch(removeCartFunc(product))
  }
  return (
    <>
     
     <div className='container-fluid' style={{width:250,margin:15,}}>
      <NavLink style={{textDecoration:'none',color:'black'}}>
      <div>
        <img width={250} height={280}  src={img} alt="" />
        </div>
        <br />
      <div>
        <div>
           <p>{categary}</p>
            <h6>{title.slice(0,25)}</h6>
            <p>{desc.slice(0,50)}</p>
            {/* <Rating/> */}
            {/* <p>${price}</p> */}
        </div>
        {
  removeCart ? <Button onClick={removeCard}>Remove</Button> :
  <>
  <Button disabled={isAdded} onClick={addCart} size="small">
  {isAdded ? 'Added' : 'Add'}
    </Button>   
  <Button  onClick={handledetail} size="small">Detail</Button>
  </>

} 

        </div>
      </NavLink>
   </div>

  
    
    </>
  )
}

export default ProductCard