import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Input from '../components/Inputs/Input'
import Cards from '../components/Cards/Cards'
import Carousel from '../components/Carousel/Carousel'

const Home = () => {
  return (
    <>
    <Navbar /><br />
    <Carousel/>
        <h2>Home</h2>

        <Input />
        <Cards />
        <Footer />
    </>
  )
}

export default Home