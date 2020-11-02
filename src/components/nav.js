import React from 'react'


import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <header>
                <Link className="logo" to="/">Phong Blog</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Nav;