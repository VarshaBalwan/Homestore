import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services-container'>
        <div className='service'>
            <i class="service-icon fa-solid fa-couch"></i>
            <h4>Unbeatable Selection</h4>
            <p>All things home, all in one place.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-headphones"></i>
            <h4>Expert Customer Service</h4>
            <p>Our friendly team's on hand seven days a week.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-truck"></i>
            <h4>Fast and Free Shipping Over $35*</h4>
            <p>Plus, two-day delivery on thousands of items.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-bag-shopping"></i>
            <h4>Amazing Value Every Day</h4>
            <p>Items you love at prices that fit your budget.</p>
        </div>
    </div>
  )
}

export default Services
