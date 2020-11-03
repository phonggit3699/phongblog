import React, { useState }  from 'react';
import About from './components/about';
import Topics from './components/topics';
import Home from './components/home';
import Footer from './components/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Nav from './components/nav'

function App() {

    const [statusNav, setStatusNav] = useState('');

    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"  component={Home}  />
                    <Route path="/about" component={About}  ></Route>
                    <Route path="/topics" component={Topics} />
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
