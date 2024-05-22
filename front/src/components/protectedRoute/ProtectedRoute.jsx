import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const ProtectedRoute = ({ path, element }) => {
    const { currentUser } = useAuth;
  
    return currentUser ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default ProtectedRoute;