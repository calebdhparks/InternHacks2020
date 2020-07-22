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
  backgroundColor: '#eee'
};
const NavigationAuth = () => (
<div>
  <ul className = "vertical-menu" style={menuStyle}>
    <li>
      <Link to={ROUTES.HOME}>My Dashboard</Link>
    </li>
    <li>
      <Link to={ROUTES.TRACK_MANAGE_APP}>Job Applications</Link>
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
    <SignOutButton />
    </li>
  </ul>
  <ul className = "vertical-menu"  style={menuStyle}>
    <li>
      <Link to={ROUTES.HOME}>Notifications</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Help & Support</Link>
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
  </ul>
  <ul className = "vertical-menu"  style={menuStyle}>
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
