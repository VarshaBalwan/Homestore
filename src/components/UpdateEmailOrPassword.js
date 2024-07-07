import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import Navbar from './Navbar'
import './Form.css'

function UpdateEmailOrPassword() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirmPassword] = useState('')
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)
        setError('')

        if(password !== passwordConfirm) {
            return setError('Passwords do not match')
        }

        if(email !== currentUser.email){
          updateEmail(email)
          .catch((error) => setError(error.message))
        }

        if(password){
          updatePassword(password)
          .catch((error) => alert(error.message))
        }

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
                        <h1>Passwords!</h1>
                        <p>They are like toothbrush. Don't let anyone else use it, and get a new one every six months.</p>
                    </div>
                </div>
            </div>

            <div className='form-container'>
              {error && <Alert variant='danger'>{error}</Alert>}
              <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Update Email or Password</h2>
                  <div className='input-group'>
                      <label className='input-label' id='email'>Email</label>
                      <input className='input-field' type='email' value={email} placeholder={currentUser.email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className='input-group'>
                      <label className='input-label' id='password'>Password</label>
                      <input className='input-field' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Leave blank to keep the same'/>
                  </div>
                  <div className='input-group'>
                      <label className='input-label' id='password-confirm'>Confirm Password</label>
                      <input className='input-field' type='password' value={passwordConfirm} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Leave blank to keep the same'/>
                  </div>
                  <br />
                  <button disabled={loading} className='form-button' type='submit'>Update</button>
              </form>
              <div className='w-100 text-center mt-2'>
                <Link to='/'  style={{color: 'orange'}}>Cancel</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default UpdateEmailOrPassword
