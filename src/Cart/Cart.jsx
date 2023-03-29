import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    
    let totalPrice = 0;
    let totalShippingCost = 0
    let allQuantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1; 
        console.log(product)
        allQuantity = allQuantity + product.quantity;
        console.log(product.quantity)

        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
    }

    const totalTax = totalPrice*0.1;
    const grandTotal = totalPrice + totalShippingCost + totalTax;

    return (
        <div className='cart-container'>
            <h5>Order Summary</h5>
            <div className='order-details'>
                <p>Selected Items: {allQuantity}</p>
                <p>Total Price:  {totalPrice}</p>
                <p>Total Shipping Cost: $ {totalShippingCost}</p>
                <p>Tax: {totalTax.toFixed(2)}</p>
                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
                
            </div>
        </div>
    );
};

export default Cart;