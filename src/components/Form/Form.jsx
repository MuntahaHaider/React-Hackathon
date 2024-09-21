import { Box, Button, Paper, TextField } from '@mui/material'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase'
import { useNavigate } from 'react-router-dom'
const Form = () => {
  const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [age,setAge] = useState('')
    const [refresh, setRefresh] = useState(false);
    const [data,setData] = useState([])
   const navigate = useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault();

       // Input validation: check if any field is empty
  if (!name || !email || !password || !age) {
    alert('Please fill all the fields'); // Alert if any field is empty
    return; // Stop further execution if validation fails
  }



      console.log(name, email , password, age)
      try{
        let userObj = {
          name,
          email,
          password,
          age,
        }
        const addData = await addDoc(collection(database,'FormData'),userObj)
        console.log('Document written with ID: ', addData.id);
        setName('')
        setEmail('')  
        setPassword('')
        setAge(''),
        navigate('/table') 

        // navigate('/table')

      }catch(error){
        console.log(error)
      }
    }


    const getData = async ()=>{
       try{
        let array = [];
        const getdata = await getDocs(collection(database,'FormData'));
        getdata.forEach((e,i)=>{
          array.push({...e.data,id:e.id})
          setRefresh(!refresh)
        })
        setData(array)
        // console.log(data)

       }catch(error){
        console.log(error)
       }
    }

    useEffect(()=>{
      getData()
    },[refresh])

  return (
    <>
     <Box >
      <Paper elevation={24} style={{margin:'auto',maxWidth:600,marginTop:100,}}>
           <form >
           <div style={{padding:30}}>
           <TextField onChange={(e)=>setName(e.target.value)} label='Name' fullWidth/><br /><br />

           <TextField onChange={(e)=>setEmail(e.target.value)} label='Email' fullWidth/><br /><br />
           <TextField onChange={(e)=>setPassword(e.target.value)} label='Password' fullWidth/><br /><br />
           <TextField onChange={(e)=>setAge(e.target.value)} label='Age' fullWidth/><br /><br />

           </div>
           <Button onClick={handleSubmit}>Submit</Button>
           </form>
      </Paper>
     </Box>

    </>
  )
}

export default Form