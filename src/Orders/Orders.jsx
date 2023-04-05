import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css'
import { useLoaderData } from 'react-router-dom';
import OrderedItem from '../OrderedItem/OrderedItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const remainItems = id => {
        const remainingItems = cart.filter(product => product.id !==id )
        setCart(remainingItems);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='products'>
            <div className=''>
                {
                    cart.map(product => <OrderedItem
                    key={product.id}
                    product = {product}
                    remainItems={remainItems}></OrderedItem>)
                }
            </div>
            <div>
                <Cart cart={cart}
                clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;