import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setLoading(true)

        login(email, password)
        .catch((error) => setError(error.message))

        setLoading(false)
    }

  return (
    <>  
        <div className='general-form login-container'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <h1 className='login-form-title'>Login</h1>
                <br /><input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /><button disabled={loading} className='login-form-button' type='submit'>Login</button>
                <br />
                <Link to='/forgot-password'>Forgot Password?</Link>
            </form>
        </div>
    </>
  )
}

export default Login
