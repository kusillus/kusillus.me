import React from 'react';
import './post.scss';
import Banner from '../media/default.jpg'

const Post = (props) => (
    <a href="" className="post__container">
        <img className="post__img" src={Banner} alt=""/>
        <div className="post__title">Titulo</div>
        <div className="post__description">
        En esta oportunidad conoceremos el archivo webpack.config.js, algunos conceptos que debes tener en cuenta y como configurarlo para trabajar en tus proyectos.
        </div>
    </a>
)
export default Post