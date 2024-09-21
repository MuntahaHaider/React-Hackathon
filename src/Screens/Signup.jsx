import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, database } from '../Config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userdata, setUserdata] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

      const addData = async (e) => {
        e.preventDefault();
        console.log(name,username, email, password);
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            console.log("user", userCredential.user.uid);
            // data in database
            let userObj = {
              name,
              username,
              email,
            };
            const uID = userCredential.user.uid;
            const storeData = await setDoc(doc(database, "users", uID), userObj);  
          console.log(storeData,"data store");
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
}
// Authentication
// let userObj = {
//   name,
//   username,
//   email,
// };
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     console.log(userCredential)
//     localStorage.setItem('userData' , JSON.stringify(userObj))
//     navigate('/login')
//   })
//   .catch((error) => {
//    console.log(error)
//   });

// // DataBase
//         e.preventDefault();
//         try {
//           let userObj = {
//             name,
//             username,
//             email,
//             password
//           };
//           const docRef = await addDoc(collection(database, "users"),userObj);
//           console.log(docRef);
//         } catch (error) {
//           console.log(error);
//         }
//       }

//      const getData = async ()=>{
//       try {
//         const arr = [];
//         const getData = await getDocs(collection(database, "users"));
  
//         getData.forEach((doc) => {
//           arr.push({ ...doc.data(), id: doc.id });
//           setRefresh(!refresh)
//         });
   
//         setUserdata(arr);
       
//       } catch (error) {
//         console.log(error);
//       }
//      }
//      useEffect(()=>{
//       getData()
//     },[refresh])



//  console.log(userdata)


// const EditData = async (id)=>{
// console.log("id=>" , id)
// let updateValue = prompt('Enter edit value..')
// const updateObj = {
//   name:updateValue, 
// }
// const updateData = await updateDoc(doc(database, "users", id), updateObj);
// console.log(updateData)
// setRefresh(!refresh)
// }


// const DeleteData = async(id)=>{
//   await deleteDoc(doc(database, "users", id));
//   setRefresh(!refresh)
// }

  return (
    <>
    <Grid container spacing={3} sx={{ paddingTop: '40px', width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}>
<Grid item xs={12} sm={12} md={6} lg={6}>
  <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt="" style={{width:100,margin:'50',marginLeft:'40%'}} />

  <br /><br /><br />
  <h3 style={{textAlign:'center',textDecoration:'underline'}}>WELCOME TO LEARNING <br /> MANAGEMENT SYSTEM</h3> <br /><br />

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
        lg:550    }}}>
        <Typography variant="h4">Signup</Typography ><br /><br />
        <TextField 
        onChange={(e)=>setName(e.target.value)}
        fullWidth 
        label='Name'/><br /><br />
        

        <TextField 
         onChange={(e)=>setUsername(e.target.value)}

         fullWidth 
         label='Username'/><br /><br />


        <TextField
         onChange={(e)=>setEmail(e.target.value)}

         fullWidth 
         label='Email'/><br /><br />


        <TextField
         onChange={(e)=>setPassword(e.target.value)}

         fullWidth 
         label='Passwrod'/>   <br /><br />
         <Button 
         onClick={addData}
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Signup
        </Button><br /><br />
         <h5>
         Already have an account?  <NavLink to='/login'>Login</NavLink>
         </h5>    
        </Paper>
     </form>
  </Typography>
</Grid>
</Grid>









{/* User Data in a Table */}
   {/* <Paper elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:700,
        lg:700
    }}}> */}

      {/* <Tables userData={userdata}/> */}
  {/* <TableContainer sx={{maxWidth:{sx:300,sm:390,md:'100%',lg:'100%'}}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((e,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.name}
              </TableCell>
              <TableCell align="right">{e.username}</TableCell>
              <TableCell align="right">{e.email}</TableCell>
              <TableCell align="right">{e.password}</TableCell>
              <TableCell align="right"><DeleteIcon onClick={()=>DeleteData(e.id)} />....<EditIcon onClick={()=>EditData(e.id)} /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    

   {/* </Paper> */}

    </>
  )
}

export default Signup