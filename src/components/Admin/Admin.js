import React,{useState} from 'react';
import {db} from '../../Firebase/Firebase';
import './Admin.css';
function Admin() {
    const addProductHandler =()=>{
        console.log(product);
        console.log(price);
        console.log(rating);
        console.log(image);
        db.collection("products").add({
           product,
           price,
           rating,
           image

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    const [product,setProduct] = useState('');
    const [price,setPrice] = useState('');
    const [rating,setRating] = useState('');
    const [image,setImage] = useState('');
    return (
        <div className="dashboard">
            
            <div className="dashboard__addProduct">
                <form className="dashboard__form">
                    <h5>Product Name</h5>
                    <input onChange={e=>setProduct(e.target.value)} name="product" value={product} type="text"></input>
                    <h5>Product Rating</h5>
                    <input name="rating" onChange={e=>setRating(e.target.value)} value={rating} type="text"></input>
                    <h5>Price</h5>
                    <input name="price" onChange={e=>setPrice(e.target.value)} value={price} type="text"></input>
                    <h5>Product Image</h5>
                    <input name="price" onChange={e=>setImage(e.target.value)} value={image} type="url"></input>
                   
                </form>
                <button onClick={addProductHandler}>Add Product</button>
            </div>

            <div className="dashboard__viewOrders">
                <h1>Today's order</h1>

            </div>
        </div>
    )
}

export default Admin
