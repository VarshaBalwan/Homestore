import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import Navbar from './Navbar'
import './Form.css'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const {resetPassword} = useAuth('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    // wait till submit
    async function handleSubmit(e) {
        e.preventDefault()

        setMessage('')
        setError('')
        setLoading(true)
        
        resetPassword(email)
        .then(() => setMessage('Check your inbox for further instructions'))
        .catch((error) => setError(error.message))
        
        setLoading(false)
    }

  return (
    <>  
        <Navbar />
        <div className='full-screen-container'>
            <div className='inner-container'>
                <div className="form-overlay-container">
                    <div className="form-overlay">
                        <div className="form-overlay-panel form-overlay-left">
                            <h1>Password!</h1>
                            <p>Choosing a hard-to-guess, but easy-to-remember password is important!</p>
                        </div>
                    </div>
                </div>

                <div className='form-container'>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <h2 className='form-title'>Reset Password</h2>
                        <div className='input-group'>
                            <input className='input-field' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br />
                        <button disabled={loading} className='form-button' type='submit'>Reset Password</button>
                    </form>
                    <div className='w-100 text-center mt-2' style={{color: 'white'}}>
                        Already have an account? <Link to='/login' style={{color: 'orange'}}>Login</Link>
                    </div>
                    <div className='w-100 text-center mt-2' style={{color: 'white'}}>
                        Don't have an account? <Link to='/sign-up' style={{color: 'orange'}}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword