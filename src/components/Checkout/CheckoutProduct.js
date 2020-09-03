import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
function CheckoutProduct({id,title,price,rating,image,quantity}) {
    const [,dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id
            
        });
    }
const increaseQuantityHandler = ()=>{
    dispatch({
        type:'INCREASE_COUNT_IN_BASKET',
        id
        
    });
}

const decreaseQuantityHandler=()=>{
    dispatch({
        type:'DECREASE_COUNT_IN_BASKET',
        id
        
    });
}
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {
                    Array(parseInt(rating))
                    .fill()
                    .map((_)=><p>⭐</p>)
                }
           </div>
           <DeleteIcon className="checkoutProduct__infoDeleteIcon" onClick={removeFromBasket}/>
           {/* <button onClick={removeFromBasket}>Remove from Basket</button> */}
           <AddBoxIcon onClick={increaseQuantityHandler} className="checkoutProduct__infoDeleteIcon"/>
           <RemoveIcon onclick={decreaseQuantityHandler} className="checkoutProduct__infoDeleteIcon"/>
            </div>
        </div>
    )
}

export default CheckoutProduct
