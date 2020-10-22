import React from 'react';

import { Switch, Route, } from 'react-router-dom';

//import Profile from '../pages/profile';
import Memorias from '../pages/profile';

//import components from '../components';

//const { Sidebar } = components;

function ProfileRoutes() {
  //const history = useHistory();

  return (
    <Switch>
      {/* <Sidebar selected={history.location.pathname} /> */}
      <Route path="/profile" exact component={Memorias} />
      {/* <Route path="/profile" component={Memorias} /> */}
    </Switch>
  );
}

export default ProfileRoutes;