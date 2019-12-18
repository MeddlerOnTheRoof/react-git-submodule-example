import React from 'react';
import './App.css';
import Navbar from './Platform/Navbar';
import Home from './Platform/Home';
import NoMatch from './Platform/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Common/Loader';
import { seedDataGenerator } from './_fake_data/generators';
import { connect } from 'react-redux';
import * as platformActions from './Platform/actions';
import * as gadgetActions from './Gadgets/actions';
import * as widgetActions from './Widgets/actions';
import '@progress/kendo-theme-default/dist/all.css';

// lazy load our modules
const GadgetsLazy = Loadable({
  loader: () => import('./Gadgets/Gadgets'),
  loading: Loader
});
const WidgetsLazy = Loadable({
  loader: () => import('./Widgets/Widgets'),
  loading: Loader
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seedData: null
    }
  }

  componentDidMount = () => {
    if (this.state.seedData !== null)
      return;

    const seedData = seedDataGenerator();

    this.setState({ seedData: seedData }, () => {
      this.props.loadData(this.state.seedData);
    });
  };

  render = () => {
    return this.state.seedData === null ? <div>Loading seed data...</div> : <React.Fragment>
      <Navbar />
      <main role='main' className='container'>
        <Switch>
          <Route path='/gadgets'>
            <GadgetsLazy />
          </Route>
          <Route path='/Widgets'>
            <WidgetsLazy />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </main>
    </React.Fragment>;
  };
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: seedData => {
      dispatch(platformActions.loadSuppliers(seedData.suppliers));
      dispatch(gadgetActions.loadGadgets(seedData.gadgets));
      dispatch(gadgetActions.loadGadgetCategories(seedData.gadgetCategories));
      dispatch(widgetActions.loadWidgets(seedData.widgets));
      dispatch(widgetActions.loadWidgetCategories(seedData.widgetCategories));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
