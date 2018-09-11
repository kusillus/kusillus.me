import React from 'react';
import './posts.scss';
import Post from './post.jsx';

const dummies = [1,2,3]
const Posts = (props) => (
    <div className="posts__container">
        <div className="posts__title">
            Mis Trabajos
        </div>
        <div className="posts__content">
            {
                dummies.map(x=>(
                    <Post/>     
                ))
            }
        </div>
    </div>
)
export default Posts