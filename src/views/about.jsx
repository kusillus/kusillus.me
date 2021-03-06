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
            <span className="spacing1_3 text__info">
                <p>
                    Tengo 27 años, soy <strong>maestro pokémon</strong> de nacimiento y <strong>frontend</strong> de profesión.
                </p>
                <p>
                    Me apasiona el <strong>diseño</strong> y <strong>desarrollo web</strong>, actualmente estoy desarrollando proyectos usando <strong>React.js</strong> y aprendiendo a dominar el <strong>stack MERN</strong>.
                </p>
                <p>
                    Fui desarrollador Frontend and UX/UI Designer en  
                    <strong className="external__links" onClick={()=> window.open('http://www.imedia.pe/', '_blank')}> Imedia Comunicaciones </strong>
                    y 
                    <strong className="external__links" onClick={()=> window.open('http://www.pymhse.com/', '_blank')}> PYM AMEDIDA</strong>
                    , actualmente vivo en Trujillo Perú.            
                </p>
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