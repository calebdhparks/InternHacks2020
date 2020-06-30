import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>This is where the users will go after sign in</p>
  </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
