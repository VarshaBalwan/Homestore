import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../contexts/StateProvider'
import {getBasketTotal} from '../Reducer'

function Subtotal() {

    const [{basket}] = useStateValue();
    
    return (
        <>
            {/* from npm */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <i className="fa fa-inr" /> <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
            />
        </>
    )
}

export default Subtotal