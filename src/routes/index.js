import React from 'react';

import { Home, Experiment} from '../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routes = () => {
  return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experiment" exact component={Experiment} />
        </Switch>
      </Router>
  );
}

export default Routes;