import React from 'react'
import imgAbout from '../../assets/about.png'
import './About.css'

export default function About() {
    return (
        <section className="about">
            <img src={imgAbout} alt="décor montagneux" />
            <div className='red_rectangle'><p>Fiabilité</p></div>
        </section>
    )
}