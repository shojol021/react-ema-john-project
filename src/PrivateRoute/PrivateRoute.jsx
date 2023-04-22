import React, { Children, useContext } from 'react';
import { AuthContext } from '../assets/Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    

    if(loading){
        return <div className='text-center fw-bold fs-3'>Loading...</div>
    }
    
    if (user) {
        return children
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;