import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import './Login.css'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirmPassword] = useState('')
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(password !== passwordConfirm) {
            return setError('Passwords do not match')
        }

        setError('')
        setLoading(true)


        signup(email, password)
        .catch((error) => setError(error.message))

        setLoading(false)
    }

  return (
    <> 
        <div className='general-form signup-container'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <h1 className='login-form-title'>Sign Up</h1>
                <br /><input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type='password' placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <br /><button disabled={loading} className='login-form-button' type='submit'>Sign Up</button>
            </form>
        </div>
    </>
  )
}

export default Signup
