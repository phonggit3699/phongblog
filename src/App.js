import React, { useState, useEffect } from 'react';
import About from './components/about';
import Topics from './components/topics';
import Home from './components/home';
import Footer from './components/footer';
import Spinner from './components/spinner';
import Form from './components/form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Nav from './components/nav'

function App() {
    const [viewSpinner, setViewSpninner] = useState(false);

    useEffect( () => {
        const readySpinner = () => {
            document.onreadystatechange =  () => {
                if (document.readyState === 'interactive') {
                    setViewSpninner(true);
                }
                else {
                    setViewSpninner(false);
                }
            }
        }

        readySpinner();
    }, []);
    
    if(viewSpinner){
        return ( <Spinner/> )
    }
    else{
        return (
            <div className="App">
                
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About}  ></Route>
                        <Route path="/topics" component={Topics} />
                        <Route path="/form" component={Form} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
   
}

export default App;
