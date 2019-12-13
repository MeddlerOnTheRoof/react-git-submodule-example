import React from 'react';
import './App.css';
import Navbar from './Platform/Navbar';
import Home from './Platform/Home';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ModuleA from './ModuleA/ModuleA';
import ModuleB from './ModuleB/ModuleB';

class App extends React.Component {
  render = () => {
    return <React.Fragment>
      <Router>
        <Navbar />
        <main role="main" className="container">
          <Switch>
            <Route path='/module-a'>
              <ModuleA />
            </Route>
            <Route path='/module-b'>
              <ModuleB />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  };
}

export default App;
