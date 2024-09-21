import { TextField } from '@mui/material'
import React from 'react'

const Input = () => {
  return (
    <>
    <TextField fullWidth /><br /><br />
      <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" /><br /><br />
      <TextField fullWidth id="filled-basic" label="Filled" variant="filled" /><br /><br />
      <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
    </>
  )
}

export default Input