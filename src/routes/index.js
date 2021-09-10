import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Students from '../pages/Students';
import Lessons from '../pages/Lessons';

const Routes = () => (
  <Switch>
    <Route path='/' exact />
    <Route path="/lessons"  component={Lessons} />
    <Route path="/students"  component={Students} />
  </Switch>
);

export default Routes;