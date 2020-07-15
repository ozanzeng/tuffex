import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

export default function HomePage() {
  const myArrow = () => <span />;
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main-slider">
      <Carousel renderArrow={myArrow} enableAutoPlay autoPlaySpeed={2000}>
        <div className="carousel-item">
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I)`,
              height: windowDimensions.height,
            }}
          />
        </div>
        <div className="carousel-item">
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc)`,
              height: windowDimensions.height,
            }}
          />
        </div>
      </Carousel>
    </div>
  );
}
