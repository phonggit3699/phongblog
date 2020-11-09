import React, { useState, useEffect } from 'react';
import About from './components/about';
import Topics from './components/topics';
import Home from './components/home';
import Footer from './components/footer';
import specific from './components/specificPost';
import { Helmet } from 'react-helmet';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Nav from './components/nav';

function App() {

    console.info("%cChào mọi người!", "color: red; font-size: 50px; font-weight: bold; text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);");
    return (
        <div className="App">
            <Helmet>
                <title>Phong Blog</title>
            </Helmet>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}  ></Route>
                    <Route path="/topics" component={Topics} />
                    <Route path="/page/:id" component={specific} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/signup" component={SignUpForm} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}


export default App;
