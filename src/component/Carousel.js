import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/slide1.jpg';
import pic2 from '../images/slide2.jpg';
import pic3 from '../images/slide3.jpg';

export default  function carousel() {

  const images = [
    { src: pic1 },
    { src: pic2 },
    { src: pic3 },

  ];

  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
              <img
            className="d-block w-100" 
            src={img.src} 
            alt={`Slide ${index + 1}`} 
          />        
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

