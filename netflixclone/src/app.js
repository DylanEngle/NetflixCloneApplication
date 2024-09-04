import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path={ROUTES.HOME}
            element={
              <IsUserRedirect user={user} path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE}>
                <Home />
              </IsUserRedirect>
            }
          />
          
          
          <Route element={<ProtectedRoute user={user} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
          
          
        <Route
            path={ROUTES.SIGN_IN}
            element={
              <IsUserRedirect user={user} path={ROUTES.SIGN_IN} loggedInPath={ROUTES.BROWSE}>
                <Signin />
              </IsUserRedirect>
            }
          />
          
          <Route
            path={ROUTES.SIGN_UP}
            element={
              <IsUserRedirect user={user} path={ROUTES.SIGN_UP} loggedInPath={ROUTES.BROWSE}>
                <Signup />
              </IsUserRedirect>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
