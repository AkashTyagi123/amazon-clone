import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';
function Checkout() {
    const [{basket,}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img alt="" className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/LP_Desktop_Header28Apr._CB1588063907_.jpg"/>
        
        {basket?.length === 0 ?(
            <div>
                <h2>Your Shopping Cart is Empty</h2>
                <p>You have no items in your basket. To buy
                    one or more. click "Add to Basket" next to item
                </p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket?.map(item=>{
                    return(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                    />
                    )
                })}
            </div>
        )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    
                    <Subtotal />
                </div>
            )}

        </div>
    )
}

export default Checkout;
