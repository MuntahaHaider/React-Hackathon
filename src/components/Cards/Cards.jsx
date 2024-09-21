import React from 'react'
import { cardData } from './data'

const Cards = () => {
  return (
    <>

   {
    cardData.map((e,i)=>{
        return(
            <>

<div key={i} style={{display:'inline-block',margin:28}}>
         <div key={i} style={{width:350,border:'2px solid gray', boxShadow:'2px 2px 5px rgba(0.5 0.5 0.5)',padding:5,}}>
          <div >
            <img width='100%' src={e.image} alt="" />
          </div>

          <div style={{textAlign:'center',marginTop:10}}>
            <h4>{e.title}</h4>
            <p>{e.desc}</p>
          </div>
      </div>
</div>


        
            </>
        )
    })
   }



    {/* <div >

      <div style={{width:350,border:'2px solid gray', boxShadow:'2px 2px 5px rgba(0.5 0.5 0.5)',padding:10}}>
          <div >
            <img width='100%' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt="" />
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum aliquid ullam minima est error iure vel sed voluptatem vitae.</p>
          </div>
      </div>
        
    </div> */}
    </>
  )
}

export default Cards