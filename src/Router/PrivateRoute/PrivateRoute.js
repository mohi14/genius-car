import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthCOntext } from '../../context/AuthoProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthCOntext)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-5xl'>Loading....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;