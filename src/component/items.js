import React from 'react';
import pic1 from "../images/menu-01.jpg";
import pic2 from "../images/menu-02.jpg";
import pic3 from "../images/menu-03.jpg";
import pic4 from "../images/menu-04.jpg";
import pic5 from "../images/menu-05.jpg";
import pic6 from "../images/menu-06.jpg";

export default function Items() {
  const images = [
    { src: pic1 },
    { src: pic2 },
    { src: pic3 },
    { src: pic4 },
    { src: pic5 },
    { src: pic6 },
  ];

  return (
    <div class="d-flex justify-content-between mt-2">
      {images.map((img, index) => (
        <img
          key={index}
          className="d-block w-full rounded-circle"
          src={img.src}
          alt={`pic${index + 1}`}
        />
      ))}
    </div>
  );
}
