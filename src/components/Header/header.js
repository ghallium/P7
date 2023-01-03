import React from "react";
import LogoKasa from "../../assets/logo.png";
import './header.css';


export default function Header() {
    return (
        <header>
        <img src={LogoKasa} alt="logo Kasa" />
        </header>
    )
}