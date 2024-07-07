import React from 'react'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
  console.log(order.data.address)
  return (
    <div className='order'>
      <div className='order-info-container'>
        <h4>Order Placed <small className='date'>{moment.unix(order.data.created).format("MMMM Do YYYY | h:mma ")}</small></h4>

        To: {order.data.name}<br />

        Address: {order.data.address}, {order.data.city}, {order.data.state}, {order.data.country}, {order.data.pin}<br />
      </div>
      <div className='order-items'>
        {order.data.basket?.map((item, index) => (
          <CheckoutProduct 
            key={order.id + index}
            id={item.id}
            image={item.image}
            company={item.company}
            title={item.title}
            price={item.price}
            showButton={false}
          />
        ))}
        <div className='total'>
          <CurrencyFormat
            renderText={(value) => (
                    <h4>Order Total: <i className="fa fa-inr" /> <strong>{value}</strong></h4>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={''}
          />
        </div>
      </div>
    </div>
  )
}

export default Order
