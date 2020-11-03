import React, { useState } from 'react';

import { NavLink } from "react-router-dom";



const Nav = () => {
    const [stickyNavBar, setStickyNavbar] = useState(false);
    const stickyNav = () => {
        if (window.scrollY >= 700) {
            setStickyNavbar(true);

        } else {
            setStickyNavbar(false)
        }
    }
    window.addEventListener('scroll', stickyNav);

    return (
        <div>
            <header className={stickyNavBar ? 'sticky' : ''}>
                <div className="logo-nav container">
                    <a className="logo" href="/"><h1>Fong Blog</h1></a>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/topics">Topics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="clear"></div>
            </header>
        </div>
    );
}

export default Nav;