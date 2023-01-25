import React from "react";
import imgHeadline from "../../assets/IMG.png";
import "../Home/home.css";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <section className="main_block">
        <div className="headline_container">
          <div className="headline">
            <p style={{ backgroundImage: `url(${(imgHeadline)})` }}> Chez vous, partout et ailleurs</p>
          </div>
        </div>
      </section>
      <div className="housing">
        {logements.map((l) => ( /* boucle pour générer autant de cards que de logements dans le json */
          /* Utilisation Link react-router-dom pour créer liens vers pages logement */
          <Link key={l.id} to={`/logement/${l.id}`}>  
            <div className="card" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${l.cover})` }}>
              <p className="housing_card_title">{l.title}</p></div>

          </Link>
        ))}
      </div>

    </>
  );
}
