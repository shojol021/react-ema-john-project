import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        // console.log(products)
    }, [])

    const cartHandler = (id) => {
        console.log(id);
    }

    return (
        <div className='products'>
            <div className='products-container'>
                {
                    products.map(p => <Product key={p.id} {...p} addToCart={cartHandler}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h5>Order Summary</h5>
                <div className='order-details'>
                    <p>Selected Items: {}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;