import React, { useContext } from 'react';
import logo from '../images/Logo.svg'
import './header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/Auth/AuthProvider';

const Header = () => {
    const { user, setUser, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('logged out'))
        setUser(false)
    }

    return (

        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                {user ?
                    <>
                        <span>{user.email}</span>
                        <button className='btn btn-danger ms-2' onClick={handleLogOut}>Signout</button>
                    </> :
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;