import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import {useStateValue} from '../contexts/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {useNavigate} from 'react-router-dom'

function Checkout() {
  const [{basket}] = useStateValue()
  const navigate = useNavigate()

  function proceedToPayment(){
    return navigate('/payment')
  }

  return (
    <>
      <div className='checkout-items'>
        {basket.map((item, index) => (
          <CheckoutProduct 
            key={index}
            id={item.id}
            image={item.image}
            company={item.company}
            title={item.title}
            price={item.price}
            showButton={true}
          />
        ))}
      </div>

      <div className='checkout-info-container'>
        <div className='subtotal'>
          <Subtotal />
        </div>

        <div className='proceed-to-payment'>
          <button type="button" className="button-design" onClick={proceedToPayment}>
            Proceed to payment
          </button>
        </div>
      </div>
    </>
  )
}

export default Checkout