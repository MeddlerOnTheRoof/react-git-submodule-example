import React from 'react';
import './App.css';
import Navbar from './Platform/Navbar';
import Home from './Platform/Home';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import GadgetsHome from './Gadgets/Gadgets';
import Widgets from './Widgets/Widgets';
import NoMatch from './Platform/NoMatch';

class App extends React.Component {
  render = () => {
    return <React.Fragment>
      <Router>
        <Navbar />
        <main role="main" className="container">
          <Switch>
            <Route path='/gadgets'>
              <GadgetsHome />
            </Route>
            <Route path='/Widgets'>
              <Widgets />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  };
}

export default App;
