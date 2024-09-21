import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
// import seminar from '../../assets/Seminar.png'
// import logo from '../../assets/logo.jpg'
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from '../Config/firebase';

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
 const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email,password)
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      console.log(userCredential)
      console.log(userCredential.user.uid)
      localStorage.setItem('UserID',userCredential.user.uid)
      const getData = await getDoc(doc(database,'users',userCredential.user.uid))
      console.log('getData',getData.data())
      alert('User Login......! \n Welcome to the Dashboard... ')
      navigate('/home');
    })
    .catch((error) => {
      console.log(error)
    });

  }
  return (
    <>
    
    <Grid container spacing={3} sx={{ paddingTop: '40px', width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}>
<Grid item xs={12} sm={12} md={6} lg={6}>
  <img  src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt="" style={{width:100,margin:'50',marginLeft:'40%'}}/>
  <br /><br /><br />
  <h3 style={{textAlign:'center',textDecoration:'underline'}}>WELCOME TO LEARNING <br /> MANAGEMENT SYSTEM</h3>
  <img  src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt="Introduction Image" style={{  width: '100%', height: 'auto' }}/>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6}>
  <Typography
    component="div" sx={{ 
    paddingRight: { md: 2 }, 
    padding:"20px",
    color:"gray",
    textAlign: {
        xs:"center",
        sm:"center",
        md:"left",
        lg:"left"  }, }}
        >
   <form >
    <Paper  elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:600,
        lg:550
    }}}>
        <Typography variant="h4">Login</Typography ><br /><br />
        <TextField onChange={(e)=>setEmail(e.target.value)}

         fullWidth label='Email'/><br /><br />
        <TextField  onChange={(e)=>setPassword(e.target.value)}
         fullWidth label='password'/>   <br /><br />
         <Button 
         onClick={handleLogin}
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Login
        </Button>
        <br /><br />
         <h5>
         Don't have an account?  <NavLink to='/'>Signup</NavLink>
         </h5>    
        </Paper>
     </form> 
  </Typography>
</Grid>
</Grid>
    </>
  )
}

export default Login