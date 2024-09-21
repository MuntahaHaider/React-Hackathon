import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // const auth = getAuth();
       signOut(auth)
       .then(() => {
        localStorage.clear('UserID')
      alert('user signOut.....')
      navigate('/login')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
      };
    
  return (
   
<>
        {/* <IconButton
            color="inherit"
            aria-label="logout"
            edge="end"
            sx={{ ml: 2 }}> */}
                <Tooltip title="SignOut">
                   <AccountCircleIcon 
                    onClick={handleLogout} 
                    style={{ fontSize: 30, cursor: 'pointer' , }} 
                   />
                </Tooltip>
            {/* <LogoutIcon  onClick={handleLogout}  style={{ fontSize: 30 , cursor:'pointer'}} title="Logout" /> */}
        {/* </IconButton> */}


   </>
  )
}

export default Logout