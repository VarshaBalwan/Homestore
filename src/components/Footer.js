import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>HOMESTORE</h2>
                    <Link to='/'>Who we are?</Link>
                    <Link to='/'>Join our team</Link>
                    <Link to='/'>Terms and Conditions</Link>
                    <Link to='/'>We Respect Your Privacy</Link>
                    <Link to='/'>Fees and Payments</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Help</h2>
                    <Link to='/'>Track order</Link>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>Payments</Link>
                    <Link to='/'>Cancellation</Link>
                    <Link to='/'>Customer Care</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Shop by</h2>
                    <Link to='/'>Men</Link>
                    <Link to='/'>Women</Link>
                    <Link to='/'>Indie</Link>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>Collections</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='social-media-logo'>
                    <Link to='./'>
                        <img src={require('../images/logo.png')} alt='Logo'/>
                    </Link>
                </div>
                <small className='website-rights'>HOMESTORE © 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link' to='./' target='_blank' aria-label='Facebook'>
                        <i className='fa-brands fa-facebook' />
                    </Link>
                    <Link className='social-icon-link' to='./' target='_blank' aria-label='Instagram'>
                        <i className='fa-brands fa-instagram' />
                    </Link>
                    <Link className='social-icon-link' to='./' target='_blank' aria-label='Twitter'>
                        <i className='fa-brands fa-twitter' />
                    </Link>
                    <Link className='social-icon-link' to='./' target='_blank' aria-label='Youtube'>
                        <i className='fa-brands fa-youtube' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer