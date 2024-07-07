import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='news-letter-container'>
      <div className="news-letter-heading">
        <h2 className="heading">
            <span>n</span>
            <span>e</span>
            <span>w</span>
            <span>s</span>
            <span className="space"></span>
            <span>l</span>
            <span>e</span>
            <span>t</span>
            <span>t</span> 
            <span>e</span> 
            <span>r</span> 
        </h2>
        </div>

        <section className="newsletter section-p1">

        <form action="">
            <div className="news-text">
            <h4>Sign Up For NewsLetters</h4>
            <p>Get E-mail updates about our latest designs and fashion tips & <span>Special offers</span></p>
            </div>
            <div className="news-form">
            <i className="button fa-solid fa-envelope"></i>
            <input className="tbox" type="email" name="" placeholder="Enter your Email" />
            <button className="button" type="button" name="button">Subscribe</button>
            </div>
        </form>
        
        </section>
    </div>
  )
}

export default Newsletter
