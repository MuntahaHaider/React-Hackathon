import React from 'react'
import styles from './Carousel.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
    <div className={styles.backgrounddiv}>
      <div className={styles.backgroundText}>
      <div >
            <h5>Summer Collection</h5>
            <h1>Introducing <br /> New Arrivals</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
            <button style={ {border:'none',borderRadius:30, width:200 , padding:10,marginTop:20}}>
              <NavLink style={{textDecoration:'none'}}>VIEW COLLECTION</NavLink>
            </button>
              </div>
      </div>
    </div>
    </>
  )
}

export default Carousel



