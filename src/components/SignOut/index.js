import React from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link to={ROUTES.LANDING} onClick={() => {
    firebase.doSignOut();
    alert('You are signed Out');
  }}><img src='my_location_24px.png' alt="" className="logoNavBar"/>
    Sign Out
  </Link>

);
/*const SignOutButton = ({ firebase }) =>(
  () => {firebase.doSignOut();
        alert('You are signed Out')
  }
);*/

export default withFirebase(SignOutButton);
