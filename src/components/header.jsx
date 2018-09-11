import React from 'react';
import './header.scss';

function createMarkup(name) {
    return {__html:name };

}
const Header = (props) => (
    <header className="header__container">
        <div className="container_profile">
            <img className="profile__img" src={props.profile} alt=""/>
            <div className="profile__info">
                <h1 className="info__title">{props.name}</h1>
                <span className="info_description" dangerouslySetInnerHTML={createMarkup(props.description)}>
                </span>
            </div>
        </div>
    </header>
)
    

export default Header;