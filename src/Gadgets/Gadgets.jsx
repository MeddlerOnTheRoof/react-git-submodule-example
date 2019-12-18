import React from 'react';
import {
    Redirect,
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import List from './List';
import Edit from './Edit';

const Gadgets = props => {
    const { path } = useRouteMatch();
    return <React.Fragment>
        <Menu />
        <Switch>
            <Route path={`${path}/home`} component={Home} />
            <Route path={`${path}/list`} component={List} />
            <Route path={`${path}/edit/:id`} component={Edit} />
            <Route path={`${path}`}>
                <Redirect to={`${path}/home`} />
            </Route>
        </Switch>
    </React.Fragment >;
};

export default Gadgets;