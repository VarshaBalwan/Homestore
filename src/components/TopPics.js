import React from 'react'
import './Collections.css'
import Product from './Product'
import {Row} from 'react-bootstrap'

function TopPics() {
  const Scroll   = require('react-scroll');
  const Element  = Scroll.Element;

  return (
    <Element name="top-pics">
      <div name='top-pick-container' className='collections-container'>
        <h1 className="heading">
          <span>T</span>
          <span>o</span>
          <span>p</span>
          <span className="space"></span>
          <span>P</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>s</span>
        </h1>
          <Row lg={3} md={2} sm={1}>
            <Product 
              id={1}
              title='Helsinki Brown Three-Seater Electric Recliner'
              image={require('../images/Item-1.png')}
              price={189499}
            />
            <Product 
              id={2}
              title='Helios Arvis Brown Engineered Wood TV Unit '
              image={require('../images/Item-2.jpg')}
              price={2799}
            />
            <Product 
              id={3}
              title='Reynan Cubby White Engineered Wood Chest'
              image={require('../images/Item-3.jpg')}
              price={13499}
            />
            <Product 
              id={5}
              title='Takeshi Leo Brown Textured Wood King Size Bed'
              image={require('../images/Item-5.jpg')}
              price={60799}
            />
            <Product 
              id={4}
              title='Alaska White Engineered Wood Dining Table'
              image={require('../images/Item-4.png')}
              price={39654}
            />
            <Product 
              id={8}
              title='Emily Beige and Grey Fabric 3+2 Sofa Set'
              image={require('../images/Item-8.jpg')}
              price={29999}
            />
          </Row>
      </div>
    </Element>
  )
}

export default TopPics