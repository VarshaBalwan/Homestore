import React from 'react'
import './Collections.css'
import {useStateValue} from '../contexts/StateProvider'
import CurrencyFormat from 'react-currency-format'

function Product({id, title, image, price}) {
    const [{}, dispatch] = useStateValue();

    function addToCart() {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }

    const printPrice = (price) => {
        return (
            <CurrencyFormat
                renderText={(value) => (
                    <div className='product-price'><i className="fa fa-inr" /> {value} </div>
                )}
                decimalScale={2}
                value={price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
            />
        )
    }

    return (
        <figure className='product-container'>
            <img className='' src={image} alt='Product' />
            <figcaption>{title}</figcaption>
            <div className='price-container'>
                <span className="price">{printPrice(price)}</span>
                <button className='button-design' onClick={addToCart}><i className='fa-solid fa-cart-shopping' />Add to cart</button>
            </div>
        </figure>
    )
}

export default Product