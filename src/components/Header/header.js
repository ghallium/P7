import React from "react";
import LogoKasa from "../../assets/logo.png";
import './header.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div>
                <a href="/"><img src={LogoKasa} alt="logo Kasa" /></a>
            </div>
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </ul>
            
        </header>
    )
}