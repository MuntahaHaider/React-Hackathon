import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return localStorage.getItem('UserID') ? <Outlet /> : <Navigate to='/'/>
}

export default ProtectedRoute