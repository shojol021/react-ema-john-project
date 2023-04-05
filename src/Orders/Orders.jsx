import React from 'react';
import Cart from '../Cart/Cart';
import './Orders.css'
import { useLoaderData } from 'react-router-dom';
import OrderedItem from '../OrderedItem/OrderedItem';

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='products'>
            <div className=''>
                {
                    cart.map(product => <OrderedItem
                    key={product.id}
                    product = {product}></OrderedItem>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;