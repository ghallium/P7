import React from "react";
import imgHeadline from "../../assets/IMG.png";
import "./home.css";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <section className="headline">
        <div className="headline_img_container">
          <img src={imgHeadline} alt="décor rocheux" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </section>
      <div className="housing">
        {logements.map((l) => (
          <Link key={l.id} to={`/logement/${l.id}`}>
            <div className="housing_card"><div className="housing_card_gradient"></div><p className="housing_card_title">{l.title}</p></div>
            
          </Link>
        ))}
      </div>

    </>
  );
}
