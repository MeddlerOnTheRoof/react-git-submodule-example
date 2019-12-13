import React from 'react'; import {
    Link,
    matchPath,
    useLocation,
    useRouteMatch
} from "react-router-dom";

const Menu = props => {
    const location = useLocation();
    const { url } = useRouteMatch();
    const routes = [
        { name: 'Home', route: `${url}/home` },
        { name: 'Dashboard', route: `${url}/dashboard` },
        { name: 'List', route: `${url}/list` },
        { name: 'Edit', route: `${url}/edit/0` }
    ];

    return <React.Fragment>
        <div className="nav-scroller bg-white box-shadow">
            <nav className="nav nav-underline">
                {routes.map((r, i) => <Link
                    key={i}
                    className={!!matchPath(location.pathname, r.route) ? 'nav-link active' : 'nav-link'}
                    to={r.route}>{r.name}</Link>)}
            </nav>
        </div>
    </React.Fragment>;
};

export default Menu;