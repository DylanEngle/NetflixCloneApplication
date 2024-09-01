import React from 'react';
import {BrowserRouter, Routes, Route,  Switch} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} index element={<Home/>}/>
          
        <Route exact path={ROUTES.BROWSE} index element={<Browse></Browse>}/>
          
        <Route exact path={ROUTES.SIGN_IN} index element={<Signin></Signin>}/>
          
        <Route exact path={ROUTES.SIGN_UP} index element={<Signup></Signup>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
