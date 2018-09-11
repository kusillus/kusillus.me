import React from 'react';
import './footer.scss';
import heart from '../media/heart.svg'

const Footer = (props) => (
    <footer className="footer">
        <span>Diseñado con</span>
        <img src={heart} alt=""/>
        <span>por <a href="">kusillus</a></span>
    </footer>
)
export default Footer