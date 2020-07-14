import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div className="navBar">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    
  </div>
);

const NavigationAuth = () => (
  <ul className = "vertical-menu">
    <li >
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
     <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
     <Link to={ROUTES.TRACK_MANAGE_APP}>Track and Manage Applications</Link>
    </li>
    <li>
    <SignOutButton /> 
    </li>
  </ul>
  
);

const NavigationNonAuth = () => (
  <ul className = "vertical-menu">
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;

/*<Link to={ROUTES.SIGN_IN}><SignOutButton /></Link>*/