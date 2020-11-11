import React, { useState, useContext } from 'react';
import './css/nav.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import AuthContext from '../authContext';

const Nav = () => {
    const authContext = useContext(AuthContext);
    const cookies = new Cookies();
    const [stickyNavBar, setStickyNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const cookie = cookies.getAll();
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

    const logOut = () =>{
        cookies.remove('utokenC');
        cookies.remove('utokenS');
        cookies.remove('userName');
        authContext.setLoggedIn(!authContext.loggedIn);
    }
    window.addEventListener('scroll', stickyNav);

    return (
        <div>
            <header className={stickyNavBar ? 'sticky' : ''}>
                <div className="logo-nav container">
                    <a className="logo" href="/"><h1>Fong Blog</h1></a>
                    <nav className={show ? 'navShow' : 'navHidden'} >
                        <ul>
                            <li>
                                <NavLink exact  activeClassName="active" to="/" onClick={showUpNav}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/about" onClick={showUpNav}>About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/topics" onClick={showUpNav}>Topics</NavLink>
                            </li>
                            <li>

                                {cookie.utokenC || cookie.utokenS? <a href="#">{cookie.userName}</a> : <NavLink activeClassName="active" to="/login" exact onClick={showUpNav}>Login</NavLink>}
                                <div className="subNav">
                                    <ul >
                                        <li>
                                        {cookie.utokenC || cookie.utokenS? <NavLink activeClassName="active" to="/info" href="#">Info</NavLink> : <NavLink activeClassName="active" to="/signup" exact onClick={showUpNav}>Sign Up</NavLink>}
                                        </li>
                                        <li>
                                            <button type="button" onClick={logOut}><i className="fas fa-sign-out-alt"></i> Log out</button>
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