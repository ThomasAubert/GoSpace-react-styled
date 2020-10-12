import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import JoinUs from './pages/joinus';

function App(){
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/joinus' component={JoinUs} exact />
      </Switch>
    </Router>
  );
}

export default App;