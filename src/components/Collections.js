import React from 'react'
import {Row} from 'react-bootstrap'
import Product from './Product'
import './Collections.css'

function Collections() {
  return (
    <div className='collections-container'>
      <h1 className="heading">
          <span>C</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
        </h1>
          <Row lg={3} md={2} sm={1}>
            <Product 
              id={7}
              title='Arvis Brown Engineered Wood 4-Door Wardrobe with Mirror'
              image={require('../images/Item-7.jpg')}
              price={21831}
            />
            <Product 
              id={9}
              title='Clary - Brown Solid Engineered Wood Side Table'
              image={require('../images/Item-9.jpg')}
              price={1499}
            />
            <Product 
              id={10}
              title='Spectra Brown Compressed Wood Coffee Table '
              image={require('../images/Item-10.jpg')}
              price={9999}
            />
            <Product 
              id={11}
              title='QUADRO Melamine Stool with Cushioned Seat - Brown'
              image={require('../images/Item-11.jpg')}
              price={2499}
            />
            <Product 
              id={16}
              title='Helsinki Beige Leather 1-Seater Electric Recliner'
              image={require('../images/Item-16.jpg')}
              price={110999}
            />
            <Product 
              id={14}
              title='Champion Smurf Blue And Black Colourblocked PU Gaming Chair'
              image={require('../images/Item-14.jpg')}
              price={24999}
            />
          </Row>
    </div>
  )
}

export default Collections
