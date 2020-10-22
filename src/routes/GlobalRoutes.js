import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Logon from '../pages/logon';
import Register from '../pages/register';
import Landing from '../pages/landing';

import ProfileRoutes from './ProfileRoutes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Logon} />
      <Route path="/register" component={Register} />
      <ProfileRoutes />
    </Switch>
  );
}

export default Routes;