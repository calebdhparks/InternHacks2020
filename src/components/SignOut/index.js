import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={() => {
    firebase.doSignOut();
    alert('You are signed Out');
  }}>
    Sign Out
  </button>

);

export default withFirebase(SignOutButton);
