import React, { useState, useEffect } from 'react';
import './css/nav.css';

import { NavLink } from "react-router-dom";



const Nav = () => {
    const [stickyNavBar, setStickyNavbar] = useState(false);
    // const [sizeScreen, setSizeScreen] = useState(false);
    const [show, setShow] = useState(false);

    const stickyNav = () => {
        if (window.scrollY >= 700) {
            setStickyNavbar(true);

        } else {
            setStickyNavbar(false)
        }
    }



    const showUpNav = () => {
        setShow(!show);
    };
    window.addEventListener('scroll', stickyNav);




    return (
        <div>
            <header className={stickyNavBar ? 'sticky' : ''}>
                <div className="logo-nav container">
                    <a className="logo" href="/"><h1>Fong Blog</h1></a>
                    <nav className={show ? 'navShow' : 'navHidden'} >
                        <ul>
                            <li>
                                <NavLink exact activeClassName="active" to="/" onClick={showUpNav}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/about" onClick={showUpNav}>About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/topics" onClick={showUpNav}>Topics</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/form" exact onClick={showUpNav}>Sign_in</NavLink>
                                <div className="subNav">
                                    <ul >
                                        <li>
                                            <NavLink  to="/form" onClick={showUpNav}><i class="fas fa-sign-in-alt"></i> Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/form/signup" onClick={showUpNav}><i class="fas fa-user-plus"></i> Sign up</NavLink>
                                        </li>
                                        <li>
                                            <button type="button"><i class="fas fa-sign-out-alt"></i> Log out</button>
                                        </li>

                                    </ul>
                                </div>

                            </li>
                        </ul>
                    </nav>
                    <button className='hambergerButton' onClick={showUpNav} type="button">☰</button>
                </div>
                <div className="clear"></div>
            </header>
        </div>
    );
}

export default Nav;