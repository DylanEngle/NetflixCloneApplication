import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (user) {
    return <Navigate to={loggedInPath} />;
  }

  return children;
}

export function ProtectedRoute({ user, redirectPath = '/signin' }) {
  return user ? <Outlet /> : <Navigate to={redirectPath} replace />;
}
