import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ name, price, ratings, seller, img, id, addToCart, shipping, quantity }) => {

    const cartDetails = {id, price, shipping, quantity}
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p>Price: ${seller}</p>
                <p>Price: ${ratings}</p>
            </div>
            <button onClick={() => addToCart(cartDetails)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;