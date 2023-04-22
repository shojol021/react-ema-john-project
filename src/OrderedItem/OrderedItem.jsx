import React from 'react';
import './ordereditem.css';

const OrderedItem = ({ product, remainItems }) => {

    return (
        <div className='ordered-item'>
            <img src={product.img} alt="" />
            <div>
                <h3 className='title'>{product.name}</h3>
                <h3>Price: <span>{`$ ${product.price}`}</span></h3>
                <h5>Ordered quantity: <span>{product.quantity}</span></h5>
                <h5>Shipping cost: <span>{`$ ${product.shipping}`}</span></h5>
            </div>
            <button onClick={() => remainItems(product.id)}>Delete</button>

        </div>
    );
};

export default OrderedItem;