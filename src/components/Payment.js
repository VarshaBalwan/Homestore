import React, {useEffect, useState, useRef} from 'react'
import {useStateValue} from '../contexts/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {useNavigate} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import {Form, Button, Row, Col} from 'react-bootstrap'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../Reducer'
import axios from './axios'
import {db} from './Firebase'
import './Payment.css'


function Payment() {

  const [{basket, user}, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)
  
  const name = useRef()
  const address = useRef()
  const city = useRef()
  const state = useRef()
  const country = useRef()
  const pin = useRef()

  useEffect(() => {
    // inside useEffect you first create an async function and then call it later

    // generate special stripe secret which will help to charge cutomers
    const getClientSecret = async () => {
      // await - wait for the response to come back before doing something
      axios({
        method: 'post',
        // stripe expects the total amount in sub-units like for rupees it's paise
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      .then((res) => {
        setClientSecret(res.data.cilentSecret)
      })
    }

    getClientSecret()
  }, [])

  console.log(clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(({ paymentIntent }) => {
      // payment intent = payment confirmation

      // database -> users collection -> doc corresponding to user -> orders collecion -> order corresponding to id -> set
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          name: name.current.value,
          address: address.current.value,
          city: city.current.value,
          state: state.current.value,
          country: country.current.value,
          pin: pin.current.value
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      // replace entire history
      navigate('/orders', {replace: true})
      
      dispatch({
        type: 'EMPTY_BASKET'
      })

    })
  }

  function handleChange(event) {
    // listen to changes in card element and display any errors while cutomer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  return (
    <div className='payment-container'>
      <div className='payment-section payment-method'>
          <div className='payment-method-header'>
            <h1>Payment Method</h1>
          </div>
          <div className='payment-details'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id='name'>Receiver's Name</Form.Label>
                    <Form.Control type='text' placeholder='name' ref={name} required />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label id='address'>Receiver's Address</Form.Label>
                    <Form.Control type='text' placeholder='street address' ref={address} required />
                    <Row>
                      <Col>
                        <Form.Label id='city'></Form.Label>
                        <Form.Control type='text' placeholder='city' ref={city} required />
                      </Col>
                      <Col>
                        <Form.Label id='state'></Form.Label>
                        <Form.Control type='text' placeholder='state' ref={state} required />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label id='country'></Form.Label>
                        <Form.Control type='text' placeholder='country' ref={country} required />
                      </Col>
                      <Col>
                        <Form.Label id='pin-code'></Form.Label>
                        <Form.Control type='number' placeholder='pin-code' ref={pin} required />
                      </Col>
                    </Row>
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label id='phone'>Contact No.</Form.Label>
                    <Form.Control type='tel' placeholder='contact no.'required />
                </Form.Group>
                <br />
                <Form.Group>
                  <CardElement onChange={handleChange}/>
                </Form.Group>
                <br />
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => (
                          <h5>Order Total: <i className="fa fa-inr" /> <strong>{value}</strong></h5>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                />
                <button className="button-design2" disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </Form>
          </div>
      </div>
      <div className='payment-section items-section'>
        <h3>Items</h3>
        {basket.map((item, index) => (
          <CheckoutProduct 
            key={index}
            id={item.id}
            image={item.image}
            company={item.company}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Payment
