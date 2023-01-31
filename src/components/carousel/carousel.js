import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/logements.json";

import './carousel.css';

export default function Carousel() {
    const {id} = useParams();
    const foundItem = data.find((object) => object.id === id);
    const pictures = foundItem.pictures;

    const [current, setCurrent] = useState(0);

     /**
    * Si la slide en cours est la dernière slide, revenir à la première ou aller à la suivante
   
    */
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    /**
    
    * Si la slide en cours est la 1re slide, définir slide en cours sur dernière slide,
    sinon définir slide en cours sur la slide précédente */
    
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
      <div className="carousel_container">  
        <div className="slider">
        {/* Showing slider navigation buttons */}
        <div className="vectorPrev" onClick={prevSlide}>
            {/* Showing slider navigation buttons */}
            <svg  alt="fleche"  viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
        </div>
        <div className="vectorNext" onClick={nextSlide}>
            <svg  alt="fleche" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
        </div>
        {/* Images */}
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