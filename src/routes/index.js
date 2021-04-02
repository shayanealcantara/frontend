import React from 'react';

import { Home } from '../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routes = () => {
  return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
  );
}

export default Routes;