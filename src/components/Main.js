import React from 'react'
import './Main.css'
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const Scroll   = require('react-scroll');
  const scroller = Scroll.scroller;
  const navigate = useNavigate()

  // to scroll to the required element when clicked
  function onClick() {
    scroller.scrollTo('top-pics', {
      duration: 1500,
      delay: 100,
      offset: -100,
    })
  }

  return (
    <div className='main-container' >
        <h1>
          Grab it now… TOMORROW IT MIGHT BE GONE FOREVER!
        </h1>
        <div className='main-container-buttons'>
          <img src={require('../images/Main.jpg')} /><br />
          <div className='button-container'>
            <button type="button" className="glow" onClick={onClick}>
              Shop Now
            </button>
            <button type="button" className="glow" onClick={() => navigate('/review-page')}>
              Discussion Forum
            </button>
          </div>
        </div>
    </div>
  )
}

export default Main