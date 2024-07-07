import React, { useState } from 'react'
import Navbar from './Navbar'
import {useAuth} from '../contexts/AuthContext'
import {Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {storage} from './Firebase'
import './Form.css'

function UpdateProfile() {
    const [newUsername, setNewUsername] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const {updateUserProfile} = useAuth()
    const navigate = useNavigate()
    const {updateImg} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        setError('')

        if(newUsername){
            setLoading(true)

            updateUserProfile(newUsername)
            .then(() => {
                navigate('/profile')
                setLoading(false)
            })
            .catch((error) => setError(error.message))
        }

        if(image){
            setLoading(true)

            const uploadTask = storage.ref(`product/${image.name}`).put(image)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                },
                
                (error) => {
                    // error function
                    console.log(error)
                    alert(error.message)
                },

                () => {
                    // complete function
                    storage
                        .ref("product")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            // post image inside database
                            updateImg(url)
                            .then(() => {
                                navigate('/profile')
                                setLoading(false)
                            })
                            
                            setImage(null)
                        })
                }
            )
        }
    }
    
    function handleChange(e) {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

  return (
    <div>
        <Navbar />
        <div className='full-screen-container'>
            <div className='inner-container'>
                <div className="form-overlay-container">
                    <div className="form-overlay">
                        <div className="form-overlay-panel form-overlay-left">
                            <h1>Name!</h1>
                            <p>It ain’t what they call you, it’s what you answer to.</p>
                        </div>
                    </div>
                </div>
                
                <div className='form-container'>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label>Username</label>
                            <input className='input-field' type='text' placeholder='Username' value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                            <label>Upload profile picture</label>
                            <input type="file" onChange={handleChange} />
                        </div>
                        <br />
                        <button disabled={loading} className='form-button' type='submit'>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile
