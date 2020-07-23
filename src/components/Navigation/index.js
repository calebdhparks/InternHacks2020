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
/*const menuStyle={
  backgroundColor: 'eee',
  height:'100vh',
  padding: '1px'
};*/
const NavigationAuth = () => (
<div>

  <ul className = "vertical-menu">
    <li>
      <img src='logo.png' alt="Logo" className="logo"/>
    </li>
    <li>
      <Link to={ROUTES.HOME}><img src='dashboard_24px.png' alt="" className="logoNavBar"/>My Dashboard</Link>
    </li>
    <li>
     <Link to={ROUTES.TRACK_MANAGE_APP}><img src='assignment_24px.png' alt="" className="logoNavBar"/>Log Applications</Link>
    </li>
    <li>
     <Link to={ROUTES.VIEW_PREV_APP}><img src='assignment_24px.png' alt="" className="logoNavBar"/>Application Tracker</Link>
    </li>
    <li>
      <Link to={ROUTES.JOB_SEARCH}><img src='view_list_24px.png' alt="" className="logoNavBar"/>Job Search</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}><img src='my_location_24px.png' alt="" className="logoNavBar"/>Goals and Rewards</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}><img src='person_24px.png' alt="" className="logoNavBar"/>My Profile</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}><img src='notifications_24px.png' alt="" className="logoNavBar"/>Notifications</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}><img src='call_24px.png' alt="" className="logoNavBar"/>Help & Support</Link>
    </li>
    <li>
    <SignOutButton />
    </li>
  </ul>
  </div>

);

const NavigationNonAuth = () => (
<div>
  <ul className = "vertical-menu"  >
    <li>
      <Link to={ROUTES.LANDING}><img src='my_location_24px.png' alt="" className="logoNavBar"/>Landing</Link>
    </li>
    <br/>
    <li>
      <Link to={ROUTES.SIGN_IN}><img src='my_location_24px.png' alt="" className="logoNavBar"/>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}><img src='call_24px.png' alt="" className="logoNavBar"/>Help & Support</Link>
    </li>
  </ul>
  </div>
);

export default Navigation;

/*<Link to={ROUTES.SIGN_IN}><SignOutButton /></Link>*/
// <li >
//   <Link to={ROUTES.LANDING}>Landing</Link>
// </li>
