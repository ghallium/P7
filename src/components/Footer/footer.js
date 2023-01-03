import React from "react";
import LogoKasaWhite from "../../assets/logo-white.png";
import './footer.css';

export default function footer() {
    return (
        <footer>
          <img src={LogoKasaWhite} alt="logo Kasa blanc" />
          <p>© 2020 Kasa. All rights reserved.</p>  
        </footer>
    )
}
