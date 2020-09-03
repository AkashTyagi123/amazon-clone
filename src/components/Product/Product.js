import React from 'react';
import './Product.css';
import {useHistory} from 'react-router-dom';

import { useStateValue } from '../StateProvider/StateProvider';
function Product({id,title,image,price,rating,quantity}) {
    const [{user},dispatch]  = useStateValue();
    const history = useHistory();
    const addToBasket = ()=>{
    
    if(!user){
        history.push('/login');
        return;
    }
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id,
            title,
            image,
            price,
            rating,
            quantity
        }
    })
    };
    return (
        <div className="product">
           <div className="product__info">
           <p>{title}</p> 
           <p className="product__price">
               <small><span role="img" aria-label="rupee sign">₹</span></small>
    <strong>{price}</strong>
           </p>

           <div className="product__rating">
                {
                    Array(parseInt(rating))
                    .fill()
                    .map((_)=><p><span role="img" aria-label="star">⭐</span></p>)
                }
           </div>
           </div>

           <img src={image} alt="product"/>
           <button onClick={addToBasket}>Add to basket</button>
           
        </div>
    )
}

export default Product
