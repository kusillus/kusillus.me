import React from 'react';
import './body.scss';
import About from './about.jsx';
import Posts from './posts.jsx'

const Body = (props) => (
    <div className="body__container">
        <About social={props.social}/>
        <Posts/>
    </div>
)
export default Body