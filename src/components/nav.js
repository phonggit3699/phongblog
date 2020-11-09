import React, { useState } from 'react';
import './css/nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [stickyNavBar, setStickyNavbar] = useState(false);
    const [loginName, setLoginname] = useState("");
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

                                {loginName ? <a href="#">{loginName}</a> : <NavLink activeClassName="active" to="/login" exact onClick={showUpNav}>Login</NavLink>}
                                <div className="subNav">
                                    <ul >
                                        <li>
                                            <NavLink to="/signup" onClick={showUpNav}><i className="fas fa-user-plus"></i> Sign up</NavLink>
                                        </li>
                                        <li>
                                            <button type="button"><i className="fas fa-sign-out-alt"></i> Log out</button>
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