import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo}></Header.Logo>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}