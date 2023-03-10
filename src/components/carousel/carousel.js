import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/logements.json";

import './carousel.css';

export default function Carousel() {
    const {id} = useParams(); 
    const foundItem = data.find((object) => object.id === id); 
    const pictures = foundItem.pictures; 

    const [current, setCurrent] = useState(0); 

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
      <div className="carousel_container">  
        <div className="slider">
        {pictures.length > 1 && (
          <div className="vectorPrev" onClick={prevSlide}>
            <svg  alt="fleche"  viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </div>
        )}
        {pictures.length > 1 && (
          <div className="vectorNext" onClick={nextSlide}>
            <svg  alt="fleche" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </div>
        )}
        {pictures.map((img, index) => {
        return (
          <div className="slider_container" key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );

} 
