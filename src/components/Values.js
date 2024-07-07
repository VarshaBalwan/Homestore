import React from 'react'
import './Services.css'

function Values() {
  return (
    <div className='services-container'>
        <div className='service'>
            <i class="service-icon fa-solid fa-paperclip"></i>
            <h4>Simplicity</h4>
            <p>Our process and purpose are clear and uncomplicated.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-handshake"></i>
            <h4>Trust</h4>
            <p>We price ourselves on being fair, ethical and transparent.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-clipboard-check"></i>
            <h4>Quality of craft</h4>
            <p>Our services are of the highest quality, reliable and long lasting.</p>
        </div>
        <div className='service'>
            <i class="service-icon fa-solid fa-clock"></i>
            <h4>Efficiency</h4>
            <p>We strive always to be timely and accurate.</p>
        </div>
    </div>
  )
}

export default Values
