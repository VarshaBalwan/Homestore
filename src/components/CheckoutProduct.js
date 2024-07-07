import React from 'react'
import { useStateValue } from '../contexts/StateProvider'
import './Checkout.css'
import CurrencyFormat from 'react-currency-format'

function CheckoutProduct({id, image, title, price, showButton}) {

    const [{}, dispatch] = useStateValue()

    function removeFromCart() {
        dispatch({
            type: 'REMOVE_FORM_BASKET',
            id: id,
        })
    }

    function checkoutButton(props) {
        if(props){
            return (
                <>
                    <button className='button-design2' onClick={removeFromCart}>Remove from Cart</button>
                </>
            )
        }
    }

  return (
    <div className='checkout-product'>
        <div className='checkout-image-container'>
            <div className='secondary-container'>
                <img src={image} alt='Checkout Product' className='checkout-product-img'/>
            </div>
        </div>
        <div className='checkout-product-info'>
            <div className='title'>{title}
            <br />
            <CurrencyFormat
                renderText={(value) => (
                    <p className='product-price'><i className="fa fa-inr" /> {value} </p>
                )}
                decimalScale={2}
                value={price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
            />
            
                {checkoutButton(showButton)}
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct