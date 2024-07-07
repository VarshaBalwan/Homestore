import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Profile.css'
import { useStateValue } from '../contexts/StateProvider'

const Profile = () => {
    const [{user}] = useStateValue()
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const [profile, setProfile] = useState('')
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        logout()
        .catch((error) => setError(error.message))
    }

    function updateStatus(){
        if(profile === ''){
            setProfile('active')
        }else{
            setProfile('')
        }
    }

  return (
    <>
        <Navbar />
        <div className='login-full-container'>
            {/* giving out error */}
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className={`profile-inner-container ${profile}`}>
                    <div className='img-box'>
                        <img src={user?.photoURL} alt='profile pic' />
                        <button onClick={updateStatus} className='button-86'>Profile</button>
                    </div>
                <div className='profile-card'>
                    <div className='profile-content'>
                        <div className='details'>
                            <h2>Profile</h2>

                            <div className='data'>
                                {/* getting currentUser's email from firebase */}
                                <div className='profile-details' >Name: {user.displayName} </div>
                                <div className='profile-details' >Email: {currentUser?.email} </div>

                                <button onClick={() => navigate('/update-emailOrPassword')} className='button-50'>Update Email or Password</button><br /><br />
                                <button onClick={() => navigate('/orders')} className='button-50'>See past orders</button><br /><br />
                                <button onClick={() => navigate('/update-profile')} className='button-50'>Update Profile</button><br /><br />
                                <button className='button-50' variant='link' onClick={handleLogout}>LogOut</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
