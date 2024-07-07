import React from 'react'
import './TrendingItems.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingItems() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='cards'>
      <h1 className="heading">
          <span>l</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
          <span>t</span>
          <span className="space"></span>
          <span>o</span>
          <span>f</span>
          <span>f</span>
          <span>e</span>
          <span>r</span>
          <span>s</span>
        </h1>
      <div className='trending-items'>
        <Slider {...settings}>
          <div>
            <img className='trending-item-img' src={require('../images/trending-1.jpg')} alt='Trending Item' />
          </div>
          <div>
            <img className='trending-item-img' src={require('../images/trending-2.jpg')} alt='Trending Item' />
          </div>
          <div>
            <img className='trending-item-img' src={require('../images/trending-3.jpg')} alt='Trending Item' />
          </div>
          <div>
            <img className='trending-item-img' src={require('../images/trending-4.jpg')} alt='Trending Item' />
          </div>
          <div>
            <img className='trending-item-img' src={require('../images/trending-5.jpg')} alt='Trending Item' />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TrendingItems;