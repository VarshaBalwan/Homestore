import React, { useState } from 'react'
import { useStateValue } from '../contexts/StateProvider'
import { storage, db } from './Firebase'
import firebase from 'firebase/compat/app';

function ReviewUpload() {
    const [review, setReview] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [{user}] = useStateValue()

    function handleChange(e) {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    function handleUpload() {
        if(!image){
            db
            .collection("posts")
            .doc("product")
            .collection("reviews")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                review: review,
                name: user?.displayName,
                avatar: user?.photoURL,
            })

            setProgress(0)
            setReview('')
            setImage(null)
        }else{
            const uploadTask = storage.ref(`product/${image.name}`).put(image)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    setProgress(progress)
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
                            db
                                .collection("posts")
                                .doc("product")
                                .collection("reviews")
                                .add({
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    review: review,
                                    imageUrl: url,
                                    name: user?.displayName,
                                    avatar: user?.photoURL,
                                })

                            setProgress(0)
                            setReview('')
                            setImage(null)
                        })
                }
            )
        }
    }

  return (
    <div className='post-upload-container'>
      <h1 style={{color: '#5B42F3'}}>Write a post!!</h1>
      <textarea type="text" placeholder='Enter a review...' onChange={(e) => setReview(e.target.value)} value={review} />
      <br /><progress value={progress} max="100" />
      <input type="file" onChange={handleChange} />
      <br /><button disabled={!user} className='form-button' onClick={handleUpload}>Post</button>
    </div>
  )
}

export default ReviewUpload
