import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';


export default function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}