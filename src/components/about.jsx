import React from 'react';
import './about.scss';
import github from '../media/github-circle.svg'
import linkedin from '../media/linkedin-box.svg'
import twiiter from '../media/twitter.svg'

const About = (props) => (
    <div className="card__container">
        <div className="card__title">
            Sobre mi
        </div>
        <div className="card__body">
            <span className="spacing1_3">
                <p>
                    Tengo 27 años, soy maestro pokémon de nacimiento y frontend de profesión.
                </p>
                <p>
                    Me apasiona el diseño y desarrollo web, actualmente estoy desarrollando proyectos usando React.js y aprendiendo a dominar el stack MERN.
                </p>
                <br/>
                <p>
                    Sigueme en mis redes sociales para conocer mi trabajo.
                </p>
                
            </span>
            <div className="info_social">
                <a href={props.social.ln}>
                    <img src={linkedin} alt=""/>
                </a>
                <a href={props.social.gh}>
                    <img src={github} alt=""/>
                </a>
                <a href={props.social.tw}>
                    <img src={twiiter} alt=""/>
                </a>
            </div>
        </div>
    </div>
)

export default About