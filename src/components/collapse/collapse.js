import React from "react";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import './collapse.css';


export default function Collapse(props) {
    /* Utilisation du state pour définir un état "active" */
    const [active, setActive] = useState(false);
    const handleToggle = () => { /* inverse la valeur de "active" lorsqu'elle est appelée */
      setActive(!active);
    };

    return (
      <>
      <div className={`accordion ${active && "showCollapse"}`}>
        <div className="accordionTitle" onClick={handleToggle}>
          <p>{props.title}</p>  <img
            className="vector"
            src={Vector}
            alt="chevron"
            />
      </div>
      <div className="accordionContent"><p>{props.texte}</p></div>
      </div>
      </>
      );
    }