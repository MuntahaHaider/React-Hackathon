import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import ProductCard from '../components/ProductCard/ProductCard'
import { fetchData } from '../store/slices/productsSlice'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'

const Products = () => {
  // const {id} = useParams()
  // console.log(id)
  const {products=[],isLoading,isError} = useSelector((state)=>state.productReducer)
  console.log(products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <>
    <Navbar />
      {/* <Cards /> */}
    <div style={{textAlign:'center',marginTop:50,marginBottom:50}} className='container-fluid'>
    <Grid container>
      {
        isLoading ? <h1>Loading......</h1> : 
       products.map((e,i)=>{
            return(
            <>
               <div key={i} style={{display:'inline-block'}} >
                  <ProductCard id={e.id} product={e} categary={e.categary} title={e.title} desc={e.description} img={e.image}  price={e.price}/>
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

export default Products