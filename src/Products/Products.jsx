import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    //Calculate price, shipping, tax
    const [cart, setCart] = useState([])

    const cartHandler = (cartDetails) => {
        const newCart = [...cart, cartDetails];
        setCart(newCart);

        //Set the id and quantity in Local Storage
        addToDb(cartDetails.id)
        setReload(!reload)
    }

    const [reload, setReload] = useState(false);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    //Get details from Local Storage
    useEffect(() => {
  
        const storedCart = getShoppingCart()

        const localCart = [];
        for (const id in storedCart) {

            const localProducts = products.find(p => p.id === id)
            
            if (localProducts) {
                const quantity = storedCart[id]
                localProducts['quantity'] = quantity;
                localCart.push(localProducts);
            }
        }
        setCart(localCart)

    }, [products, reload])


    return (
        <div className='products'>
            <div className='products-container'>
                {

                    products.map(p => <Product key={p.id} {...p} addToCart={cartHandler}></Product>)
                }
                
            </div>
            <div>
                <Cart cart={cart}
                clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Products;