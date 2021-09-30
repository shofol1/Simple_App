import React, { useState } from 'react';
import PetsName from '../PetsName/PetsName';

const Cart = (props) => {
    const {cart}=props;
    //calculate total
    let total=0;
    for(const pet of cart){
        total=total+pet.price;
    }
    console.log(props);
    
    return (
        <div>
            <h5 className="text-start ps-3 pt-3 text-secondary">Dogs Added : {cart.length} </h5>
            <h5 className="text-start ps-3 pt-3 text-secondary">Total : $ {total.toFixed(2)} </h5>
            <ol>
                {
                    cart.map(cart=><PetsName cart={cart}></PetsName>)
                }
            </ol>
        </div>
    );
};

export default Cart;