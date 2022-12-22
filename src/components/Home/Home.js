import React from 'react';
import LogoKasa from '../../assets/logo.png'
import imgHeadline from '../../assets/IMG.png'
import './home.css'

export default function Home() {
    return (
        <>
            <header>
                <img src={LogoKasa} alt="logo Kasa"/> 
            </header>
            <section class="headline">
                <div class="headline_img_container">
                    <img src={imgHeadline} alt="décor rocheux"/>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </section>
        </>
    )
}