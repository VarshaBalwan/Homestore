import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {useStateValue} from '../contexts/StateProvider'
import Checkout from './Checkout'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

function Navbar() {
    const [click, setClick] = useState(false)
    const [{basket, user}] = useStateValue()
    const [showCart, setShowCart] = useState(false)

    function handleClick(){
        setShowCart(false)
        setClick(!click)
    }
    function closeMobileMenu(){
        setShowCart(false)
        setClick(false)
    }
    function cartClick(){
        setClick(false)
        setShowCart(!showCart)
    }

    window.addEventListener('resize', () =>{
        if(window.innerWidth > 960)
            setClick(false)
    })

    function homeIcon(){ 
        return (
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {click ? "Home" : <i className="fa-solid fa-house" />}
            </Link>
        )
    }

    function cartIcon() {
        return (
            <div className='nav-links' onClick={cartClick}>
                {click ? "Cart items: " : <i className="fa-solid fa-cart-shopping" />}         
                {basket?.length}
            </div>
        )
    }

    function checkout() {
        return(
            <div className={showCart ? 'checkout-container' : 'checkout-container deactivated'}>
                <Checkout />
            </div>
        )
    }

    function loginIcon() {
        if(user){
            return (
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    {click ? "Profile" : <i className="fa-solid fa-user" />}
                </Link>
            )
        }else{
            return (
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                    {click ? "Login" : <i className="fa-solid fa-user" />}
                </Link>
            )
        }
    }

    return (
        <>
            <nav className='navbar position-sticky w-100 shadow p-3 bg-white rounded'>
                <div className='navbar-container w-100'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        HOMESTORE
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                <Tooltip id='tooltip-bottom'>
                                    Home
                                </Tooltip>
                                }
                            >
                                {homeIcon()}
                            </OverlayTrigger>
                        </li>
                        <li className='nav-item'>
                            <OverlayTrigger
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                    <Tooltip id='tooltip-bottom'>
                                        Cart
                                    </Tooltip>
                                    }
                                > 
                                {cartIcon()}
                            </OverlayTrigger>
                        </li>
                        <li className='nav-item'>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                <Tooltip id='tooltip-bottom'>
                                    {user ? 'Profile' : 'Login'}
                                </Tooltip>
                                }
                            > 
                                {loginIcon()}
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
            </nav>
            {checkout()}
        </>
    )
}

export default Navbar