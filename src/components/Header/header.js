import React from "react";
import LogoKasa from "../../assets/logo.png";
import './header.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div>
                <img src={LogoKasa} alt="logo Kasa" />
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </ul>
            </div>
        </header>
    )
}