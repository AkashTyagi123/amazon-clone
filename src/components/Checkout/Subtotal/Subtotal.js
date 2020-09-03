import React from 'react'

import { useStateValue } from '../../StateProvider/StateProvider';
import './Subtotal.css';
const  Subtotal = ()=>{
    const [{basket},] = useStateValue();
   let totalPrice = basket.reduce(function(total,curr){
       return total + parseInt(curr.price);
   },0)
    return (
        <div className="subtotal">
            <h1>Subtotal</h1>
       
        {basket.map(ele=>{
            return(
            <div className="subtotal__item">
                <strong>{ele.title}X{ele.quantity}</strong>
                <small>₹{ele.price}</small>
            </div>
            )
        })}
    <button>Proceed to pay ₹{totalPrice}</button>
        </div>
    )
}

export default Subtotal
