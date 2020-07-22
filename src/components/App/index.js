import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import TrackManageApp from '../TrackManageApp';
import ViewPrevApps from '../ViewPrevApps';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import { withFirebase } from '../Firebase';
const App = () => (
  <Router>
    <div>
      <Navigation />


      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.TRACK_MANAGE_APP} component={TrackManageApp} />
      <Route path={ROUTES.VIEW_PREV_APP} component={ViewPrevApps} />
    </div>
  </Router>
);

withFirebase(ViewPrevApps)
export default withAuthentication(App);
