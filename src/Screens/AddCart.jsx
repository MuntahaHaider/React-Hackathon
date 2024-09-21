import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/ProductCard/ProductCard'
import { Grid } from '@mui/material'
import Footer from '../components/Footer/Footer'

const AddCart = () => {
    const {addCart,isLoading,isError} = useSelector((state)=>state.addCartReducer)
  console.log(addCart)


  return (
   <>
 <Navbar/>
<div style={{textAlign:'center',marginTop:50,marginBottom:50}} className='container-fluid'>
   <Grid container>
      {
        isLoading ? <h1>Loading</h1> : addCart.map((e,i)=>{
          return (
            <>
             <div  style={{display:'inline-block'}} key={i}>
                  <ProductCard removeCart={true} product={e} key={i} categary={e.categary} title={e.title} desc={e.description} img={e.image}  price={e.price}/>
               </div>
            </>
          )
        })
      }
   </Grid>
   </div>



   <Footer />

 </>  
)
}

export default AddCart