import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'


import "./Pet.css";



const Pet = (props) => {
    //distructring data
    const{img,price,age,breeds,life_span,weight}=props.pets;
    return (
        <div>
            <div className="card me-4 ms-3 my-card">
         {/* pets cart */}
    <img className="card-img-top imgDog" src={img} alt="Card image cap"/>
    <div className="card-body">
      <h4 className="card-title breeds">{breeds}</h4>
      <p className="card-text">Age: {age}</p>
      <h6 className="card-text">Life Span: {life_span}</h6>
      <h6 className="card-text">Price: {price}</h6>
      <h6 className="card-text">Weight: {weight}</h6>
      <button onClick={()=>props.handlePetCart(props.pets)} className="btn btn-primary mt-3"> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
      <div className="mt-4">
      <FontAwesomeIcon icon={faFacebook}  className="fs-3 me-3 p-1 social"/>
      <FontAwesomeIcon icon={faTwitter} className="fs-3 me-3 p-1 social" />
      </div>
      
    </div>
        </div>
        </div>
    );
};

export default Pet;