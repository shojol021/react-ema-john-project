import React from 'react';
import './cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = ({cart, clearCart}) => {

    const navigate = useNavigate(null)
    
    let totalPrice = 0;
    let totalShippingCost = 0
    let allQuantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1; 
        allQuantity = allQuantity + product.quantity;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
    }

    const totalTax = totalPrice*0.1;
    const grandTotal = totalPrice + totalShippingCost + totalTax;

    const goToCheckout = () => {
        navigate('/orders')
    }

    return (
        <div className='cart-container'>
            <h5>Order Summary</h5>
            <div className='order-details'>
                <p>Selected Items: {allQuantity}</p>
                <p>Total Price:  {totalPrice}</p>
                <p>Total Shipping Cost: $ {totalShippingCost}</p>
                <p>Tax: {totalTax.toFixed(2)}</p>
                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
                <button onClick={clearCart} className='clear'>Clear Cart</button>
                <button onClick={goToCheckout} className='checkout'>Checkout</button>
                
            </div>
        </div>
    );
};

export default Cart;