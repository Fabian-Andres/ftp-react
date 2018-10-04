// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Containers/App';
import Home from './Components/Modules/Home';
import About from './Components/Modules/About';
import NotFound from './Components/Modules/NotFound';

const Routes = () => (
  <App>
    {/*---- Routes Components ----*/}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route component={NotFound} />
    </Switch>
  </App>
)

export default Routes;
