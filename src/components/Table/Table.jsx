import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase';
import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Paper } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Table = () => {
    const [data,setData] = useState([])
    const [refresh, setRefresh] = useState(false);


    const getData = async ()=>{
        try{
         let array = [];
         const getdata = await getDocs(collection(database,'FormData'));
         getdata.forEach((e,i)=>{
           array.push({...e.data(),id:e.id})
           setRefresh(!refresh)

         })
         setData(array)
 
        }catch(error){
         console.log(error)
        }
     }
 
     useEffect(()=>{
       getData()
      //  console.log(data)

     },[refresh])




    // delete data from database
    const handleDelete = async (id)=>{
         console.log(id)
        await deleteDoc(doc(database,'userData',id))
    }
 
  //  edit data from datbase
  // const handleEdit = async(id)=>{
  // }


  return (
    <>
    <Navbar />
     <TableContainer sx={{ maxWidth: 800 , margin:'auto', padding:10 }}>
        <table>
            <TableHead>
                <TableRow>
                <TableCell align="left">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Action</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
            {
        data.map((e,i)=>{
            return(
                <>
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{e.id}</TableCell>


                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.age}</TableCell>
                <TableCell style={{paddingLeft:20}} align="right">

                  <DeleteIcon style={{cursor:'pointer'}} onClick={()=>handleDelete(e.id)}/>
                    ....
                    <EditIcon  style={{cursor:'pointer'}} onClick={()=>handleEdit(e.id)}/>
                    </TableCell>


              
              </TableRow>

                </>
            )
        })
    }
            </TableBody>
        </table>
     </TableContainer>


    
    {/* <TableContainer sx={{ maxWidth: '70%' ,marginLeft:30 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Qualification</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{e.id}</TableCell>


                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.password}</TableCell>
                <TableCell align="right">{e.age}</TableCell>

              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

    </>
  )
}

export default Table