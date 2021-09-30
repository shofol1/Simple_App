import React from 'react';
import "./Header.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDog} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'
const Header = (props) => {
    console.log(props.pets.length);
    return (
        <div className="header-container">
            <h2><FontAwesomeIcon icon={faDog} className="fs-1 me-3 p-1 social" />DogsFinder</h2><br />
            <h5>Perfect Place to find your favourite dog</h5>
            <h6>Available Dogs: {props.pets.length}</h6>
        </div>
    );
};

export default Header;