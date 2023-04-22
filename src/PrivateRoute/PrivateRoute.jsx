import React, { Children, useContext } from 'react';
import { AuthContext } from '../assets/Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div>Loading...</div>
    }
    
    if (user) {
        return children
    }
};

export default PrivateRoute;