import React from 'react';
import { Link, matchPath, useLocation } from "react-router-dom";

const Navbar = props => {
    const location = useLocation();
    const routes = [
        { name: 'Gadgets', route: '/gadgets' },
        { name: 'Widgets', route: '/widgets' }
    ];

    // todo: determine what routes a person should or should not have access to
    // and which routes are active; use the following class names from boostrap:
    // active (use this on the li element)
    // disabled (use this only on the Link)
    // replace bootstrap javascript with react handling
    return <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to='/'>Submodule Example Project</Link>
            <ul className="navbar-nav mr-auto">
                {routes.map((r, i) => <li key={i} className={!!matchPath(location.pathname, r.route) ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to={r.route}>{r.name}</Link>
                </li>)}
            </ul>
        </nav>
    </React.Fragment>;
};

export default Navbar;