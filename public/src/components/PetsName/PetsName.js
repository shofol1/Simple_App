import React from 'react';

const Product = (props) => {
   const {cart}=props;
   
    return (
        <div>
            <li>{cart.breeds}</li>
        </div>
    );
};

export default Product;