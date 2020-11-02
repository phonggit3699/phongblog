import React from 'react';
import About from './components/about';
import Topics from './components/topics'
import Home from './components/home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Nav from './components/nav'

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
