import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import OrderedItem from '../OrderedItem/OrderedItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const remainItems = id => {
        const remainingItems = cart.filter(product => product.id !== id)
        setCart(remainingItems);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    if (cart.length === 0) {
        return <h3 className='text-center'>You have not added any product yet</h3>
    } else {
        return (
            <div className='products'>
                <div className=''>
                    {
                        cart.map(product => <OrderedItem
                            key={product.id}
                            product={product}
                            remainItems={remainItems}></OrderedItem>)
                    }
                </div>
                <div>
                    <Cart cart={cart}
                        clearCart={clearCart}></Cart>
                </div>
                <button className='btn btn-info w-25 mx-auto my-3' onClick={goBack}>Back</button>
            </div>
        );
    }
};

export default Orders;