import React, { useState } from 'react'
import Navbar from './Navbar'
import './Login.css'
import Login from './Login'
import Signup from './Signup'

function OuterLogin() {
    const [change, setChange] = useState(false)
    const [style, setStyle] = useState('login-inner-container')

    function changeToOther() {
        setChange(!change) 
        if(change){
            setStyle('login-inner-container right-panel-active')
        }else{
            setStyle('login-inner-container')
        }
    }
    
  return (
    <>
        <Navbar />
        <div className='login-full-container'>
            <div className={style}>
                <Login />
                <Signup />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='login-form-button ghost' onClick={changeToOther}>Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className='login-form-button ghost' onClick={changeToOther}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default OuterLogin
