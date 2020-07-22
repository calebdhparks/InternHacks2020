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
const menuStyle={
  backgroundColor: 'eee',
  height:'100vh',
  padding: '1px'
};
const NavigationAuth = () => (
<div>
  <ul className = "vertical-menu" style={menuStyle}>
    <li>
      <Link to={ROUTES.HOME}>My Dashboard</Link>
    </li>
    <li>
     <Link to={ROUTES.TRACK_MANAGE_APP}>Log Applications</Link>
    </li>
    <li>
     <Link to={ROUTES.VIEW_PREV_APP}>Application Tracker</Link>
    </li>
    <li>
      <Link to={ROUTES.JOB_SEARCH}>Job Search</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Goals and Rewards</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>My Profile</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Notifications</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Help & Support</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>FAQ</Link>
    </li>
    <li>
    <SignOutButton />
    </li>
  </ul>
  </div>

);

const NavigationNonAuth = () => (
<div>
  <ul className = "vertical-menu"  style={menuStyle}>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Help & Support</Link>
    </li>
  </ul>
  </div>
);

export default Navigation;

/*<Link to={ROUTES.SIGN_IN}><SignOutButton /></Link>*/
// <li >
//   <Link to={ROUTES.LANDING}>Landing</Link>
// </li>
