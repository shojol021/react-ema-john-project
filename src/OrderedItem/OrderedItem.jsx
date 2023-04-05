import React from 'react';
import './ordereditem.css';

const OrderedItem = ({ product }) => {

    console.log(product)
    return (
        <div className='ordered-item'>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <h3>Price: {product.price}</h3>
                <h5>Ordered quantity:{product.quantity}</h5>
                <h5>Shipping cost:{product.shipping}</h5>
            </div>
            <button>Delete</button>

        </div>
    );
};

export default OrderedItem;