import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

function App() {
  const user = {};
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
          
        <Route exact path={ROUTES.BROWSE} index element={<Browse></Browse>}/>
          
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
