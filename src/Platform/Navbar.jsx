import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render = () => {
        // todo: determine what routes a person should or should not have access to
        // and which routes are active; use the following class names from boostrap:
        // active (use this on the li element)
        // disabled (use this only on the Link)
        // replace bootstrap javascript with react handling
        return <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to='/'>Submodule Example Project</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/module-a'>Module A</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/module-b'>Module B</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>;
    };
};

export default Navbar;