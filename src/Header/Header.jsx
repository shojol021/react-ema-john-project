import React from 'react';
import logo from '../images/Logo.svg'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;