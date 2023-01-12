import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Stars from '../stars';
import Carousel from '../carousel/carousel.js';
import '../Logements/logements.css';



import data from "../../data/logements.json";



export default function Logements() {
  let { id } = useParams();


  const [logement, setLogement] = useState({
    tags: [],
    host: {name: "", picture: ""},
    equipments: [],
    description: "",
    location: "",
    pictures: [],
    cover: "",
    rating: "",
    
    
  });
  ;


  useEffect(() => {
    data.map((house) => {
      if (house.id === id){
        setLogement(house);
      }
      return null;
    }, [id]);
  })

  const listeEquipements = logement.equipments.map((e) => <li key={e}>{e}</li>);
 
  console.log(logement)
  return (
   <>
    <Carousel pictures={logement.pictures} />
    <div className="content">
      <div className="left_block">
        <div className="location">
          <b>{logement.title}</b>
          <p>{logement.location}</p>
        </div>
        <div className="tags">
          <ul>
          {logement.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    
    <div className="right_block">
        <div className="rating">
            <Stars rating={logement.rating} />
        </div>
    </div>

    <div className="host">
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt="host" />
    </div>

    <div className="description">
      <p>{logement.description}</p>
      <p>{listeEquipements}</p>
    </div>
    </> 
  );
}
