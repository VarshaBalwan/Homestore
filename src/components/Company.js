import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Company.css";

export default function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="company-container">
      <div style={{ position: "relative" }}>
        <Carousel 
          responsive={responsive}
          infinite={true}
          arrows={false}
        >
          <div className="img-container"><img src={require('../images/helios.png')} /></div>
          <div className="img-container"><img src={require('../images/helsinki.png')} /></div>
          <div className="img-container"><img src={require('../images/avris.png')} /></div>
          <div className="img-container"><img src={require('../images/spectra.png')} /></div>
          <div className="img-container"><img src={require('../images/quadro.png')} /></div>
        </Carousel>
      </div>
    </div>
  );
}
