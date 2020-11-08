import React from 'react';
import { NavLink } from "react-router-dom";
import './css/form.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginForm from './loginForm';

const Form = () => {

   
    return (
        <div className="container newSignInForm" >
            <NavLink exact activeClassName="active" className="btn btn-primary" to="/">&#8592;Home</NavLink>
            <Router>
                <Switch>
                    <Route exact path="/form" component={LoginForm} />
                    {/* <Route path="/about" component={About}  ></Route> */}
                </Switch>
            </Router>
        </div>

    )
}

export default Form;