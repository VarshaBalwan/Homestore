import React, { useEffect, useState } from 'react'
import Review from './Review'
import './ProductPage.css'
import Navbar from './Navbar'
import { db } from './Firebase'
import ReviewUpload from './ReviewUpload'
import { useStateValue } from '../contexts/StateProvider'

function ProductPage() {
  const [posts, setPosts] = useState([]);
  const [{user}] = useStateValue()

  useEffect(() => {
    db
        .collection("posts")
        .doc("product")
        .collection("reviews")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data() 
            })))
        ))
  }, [])

  if(!user){
    alert("Login to post a review!!")
  }

  return (
    <div className='product-page-container'>
        <Navbar />
      <div className='product-section'></div>
      <div className='review-section'>
        <div className='reviews'>
          <h1>Discussion Forum</h1>
          {posts.map((post) => (
              <Review 
                  key={post.id}
                  name={post.data.name}
                  avatar={post.data.avatar}
                  review={post.data.review}
                  images={post.data.imageUrl}
              />
          ))}
        </div>
        <ReviewUpload />
      </div>
    </div>
  )
}

export default ProductPage
