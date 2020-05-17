import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login'
import Content from './pages/Content'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/membros' exact component={Content}/>
      </Switch>
    </Router>
  )
}

export default Routes;