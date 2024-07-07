import React from 'react'
import Avatar from 'react-avatar'
import './ProductPage.css'

function Review({ name, avatar, review, images }) {
  console.log(review)
  console.log(images)
  return (
    <div className='post-container'>
        <div className="post">
            <div className='post-header'>
                <Avatar className='post-avatar' src={avatar} name={name} size={34} round={true}/>
                <div className='username'>{name}</div>
            </div>
            <div className='post-review'>
            {review}
            {images && <img src={images} alt='pic' />}
            </div>
            
        </div>
    </div>
  )
}

export default Review
