// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Containers/App';
import Home from './Components/Modules/Home';
import Proyects from './Components/Modules/Proyects';
import Login from './Components/Modules/Login';
import NotFound from './Components/Modules/NotFound';

const Routes = () => (
  <App>
    {/*---- Routes Components ----*/}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/proyects" component={Proyects} />
      <Route exact path="/login"  component={Login} />
      <Route component={NotFound} />
    </Switch>
  </App>
)

export default Routes;
