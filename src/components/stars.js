import React from "react";

export default function ColorStars(props) {
  let nbStars = props.rating;

  const maxStar = 5;
  const stars = [];

  for (let i = 1; i < maxStar + 1; i++) {
    /* Si i est < ou = à nbStars, ajoute un nouvel élément active-star  */
    if (i <= nbStars) {
      stars.push(
        <svg key={i} className="active-star"  xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </svg>
      );
    } else {
      /* Sinon, ajoute un nouvel élément false-star  */
      stars.push(
        <svg key={i} className="false-star" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
        </svg>
      );
    }
  }
  return <>{stars}</>;
}
