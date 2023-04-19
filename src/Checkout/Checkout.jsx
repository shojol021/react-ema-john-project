import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Checkout page</h3>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default Checkout;