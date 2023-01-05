import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import data from "../../data/logements.json";


export default function Logements() {
  let { id } = useParams();


  const [logement, setLogement] = useState({
    tags: [],
    host: {name: "", picture: ""},
    
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


 
  console.log(logement)
  return (
    <div>
      <h2>Logements</h2>
    </div>
  );
}
