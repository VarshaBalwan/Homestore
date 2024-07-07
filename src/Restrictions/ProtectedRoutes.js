import React from 'react'
import {Navigate, Outlet} from 'react-router'
import {useStateValue} from '../contexts/StateProvider'

function ProtectedRoutes() {
    const [{user}] = useStateValue()
    
    // outlet let's you render multiple routes
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
