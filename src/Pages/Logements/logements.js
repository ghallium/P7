import React from "react";
import { useParams } from 'react-router-dom';
import Stars from '../../components/stars';
import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
import '../../Pages/Logements/logements.css';
import Error from "../../Pages/Error/Error";
import data from "../../data/logements.json";

export default function Logements() {
  let { id } = useParams();
  const foundLogement = data.find(logement => logement.id === id);



  if(!foundLogement) {
    return <Error />
  } else {
    const listeEquipements = foundLogement.equipments.map((e) => <li key={e}>{e}</li>);

    return (
      <>
       <Carousel pictures={foundLogement.pictures} />
       
       <div className="content">
           <div className="left_block">
               <div className="location">
                 <b>{foundLogement.title}</b>
                 <p>{foundLogement.location}</p>
           </div>
           <div className="tags">
               <ul className="tags_elements">
                 {foundLogement.tags.map((t) => (
                     <li key={t}>{t}</li>
                   ))}
               </ul>
           </div>
         </div>
         <div className="right_block">
           <div className="rating">
               <Stars rating={foundLogement.rating} />
           </div>
           <div className="host">
             <p>{foundLogement.host.name}</p>
             <img src={foundLogement.host.picture} alt="host" />
           </div>
          </div>          
       </div>
       
       <div className="bottom_block">
            <div className="description"> 
               <Collapse texte={foundLogement.description} title="Description" />
             </div>
             <div className="equipements">
               <Collapse texte={listeEquipements} title="Equipements" />
             </div>
        </div>
      </>
     );
  }
}

