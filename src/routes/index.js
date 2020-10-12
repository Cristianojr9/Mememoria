import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Logon from '../pages/logon';
import Register from '../pages/register';
import Landing from '../pages/landing';
import Profile from '../pages/profile';
import Memorias from '../pages/memorias';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Logon} />
      <Route path="/register" component={Register} />

      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/memorias" component={Memorias} />
    </Switch>
  );
}

export default Routes;