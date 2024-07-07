import React from 'react'
import {Navigate, Outlet} from 'react-router'
import {useStateValue} from '../contexts/StateProvider'

function ProtectedRoutes() {
    const [{user}] = useStateValue()
    
  return !user ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
