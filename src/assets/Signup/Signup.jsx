import React from 'react';
import './signup.css';

const Signup = () => {
    return (
        <div id='form-container'>
            <form action="">
                <div id='input-container'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="emain" id="email" />
                </div>
                <div id='input-container'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="emain" id="password" />
                </div>
            </form>
        </div>
    );
};

export default Signup;