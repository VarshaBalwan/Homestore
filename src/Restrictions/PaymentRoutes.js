import React from 'react'
import {Navigate, Outlet} from 'react-router'
import {useStateValue} from '../contexts/StateProvider'

function ProtectedRoutes() {
    const [{user, basket}] = useStateValue()
    if(user && basket?.length > 0){
        return <Outlet />
    }
    if(!user){
        return <Navigate to='/login' />
    }
    alert('your cart is empty!!!')
    return <Navigate to='/' />
}

export default ProtectedRoutes
