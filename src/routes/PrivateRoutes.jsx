import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext)
    const location = useLocation(); // Get the route the user is trying to visit

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (!user) {
        return <Navigate to='/signIn' state={location.pathname}></Navigate> // IF no user then send him to signIn route. Here state contains the route the user tried to visit
    }
    
    return children // If user is logged in, allow access to the protected route
};

export default PrivateRoutes;