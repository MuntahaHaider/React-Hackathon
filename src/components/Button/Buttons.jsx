import { Button } from '@mui/material'
import React from 'react'

const Buttons = ({value,table}) => {
  return (
    <Button>{value}{table}</Button>
  )
}

export default Buttons