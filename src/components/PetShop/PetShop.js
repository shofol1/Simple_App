import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header"
import Pet from '../Pet/Pet';
import Cart from '../Cart/Cart';
const PetShop = () => {
    const [pets,setPets]=useState([]);
  useEffect(()=>{
      //fetching data
    fetch('./fakeData.json')
    .then(res=>res.json())
    .then(data=>setPets(data))
  },[]);

//   pets cartState 
const [cart,setCart]=useState([])

//   event handeler for button 
const handlePetCart=(pet)=>{
    const newCart=[...cart,pet];
    setCart(newCart)
}
    return (
        <div className="">
            <Header pets={pets}></Header>
            <div className="row pt-3">
                <div className="col-9 col-lg-9 d-flex flex-wrap">
                    {
                        pets.map(pet=><Pet key={pet._id} pets={pet} handlePetCart={handlePetCart}></Pet>)
                    }
                </div>
                <div className="col-3 col-lg-3 border border-1">
                    <Cart cart={cart} handlePetCart={handlePetCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default PetShop;