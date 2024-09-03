import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (user) {
    return <Navigate to={loggedInPath} />;
  }

  return children;
}

export function ProtectedRoute({user, children, ...rest}){
    if(user){
        return children;
    }
    if(!user){
        <Navigate to={{pathname:'signin'}}></Navigate>
    }
}
