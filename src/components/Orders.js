import React, { useEffect, useState } from 'react'
import { db } from './Firebase'
import { useStateValue } from '../contexts/StateProvider'
import Order from './Order'
import Navbar from './Navbar'
import './Orders.css'

function Orders() {

    const [{user}] = useStateValue()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if(user){
            // take snapshot from orders
            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data() 
                    })))
                ))
        }
    }, [user])

  return (
    <>
        <Navbar />
        <h1 className='order-head'>Your orders</h1>
        <div className='orders'>
            {orders?.map((order, index) => (
                <Order key={index} order={order}/>
            ))}
        </div>
    </>
  )
}

export default Orders
