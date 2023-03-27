import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products)
    }, [])

    return (
        <div className='products'>
            <div className='products-container'>
                {
                    products.map(p => <Product key={p.id} {...p}></Product>)
                }
            </div>
            <div className='cart-container'>
                
            </div>
        </div>
    );
};

export default Products;