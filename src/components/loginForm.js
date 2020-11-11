import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { authLoginAPI } from '../API';
import { NavLink, Redirect, useLocation } from "react-router-dom";
import './css/form.css';
import ValidateForm from "./validationForm";
import Cookies from 'universal-cookie';
import AuthContext from '../authContext';

const LoginForm = () => {
    
    const authContext = useContext(AuthContext);
    const cookies = new Cookies();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState([]);
    const { HandleChange, HandleSubmit, values, errors,HandleClick } = ValidateForm();
    let location = useLocation();
    let date = new Date();
    date.setTime(date.getTime()+(20*60*1000));
    let dateCookie = new Date(2020, 12, 10);
    
    const onSubmit = async (data) => {
        try {
            HandleSubmit();
            if (Object.keys(errors).length !== 0) {
                setLoading(false); console.log('loi roi'); return
            };
            setLoading(true);
            const authLogin = await authLoginAPI(data);
            setCheck(authLogin);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
        }
    }
    if(check.status === 'sucess' && values.remember && !loading){
        cookies.set('utokenC', check.cookie, { path: '/', expires: dateCookie });
        cookies.set('userName', check.username, { path: '/', expires: dateCookie });
        authContext.setLoggedIn(!authContext.loggedIn);
    }
    if (check.status === 'sucess' && !loading) {
        cookies.set('utokenS', check.cookie, { path: '/', expires: date });
        cookies.set('userName', check.username, { path: '/', expires: date });
        authContext.setLoggedIn(!authContext.loggedIn);
        return (
            
            <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            />
        )
    }
    else {
        return (
            <div className="loginForm container">
                <NavLink exact activeClassName="active" className="btn btn-primary" to="/">&#8592;Home</NavLink>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-3">
                        <label htmlFor="username">Username: </label>
                        <input type="text" className="form-control"
                            value={values.username ? values.username : ''}
                            name="username"
                            required ref={register}
                            onChange={HandleChange} />
                        <small className='error'>{errors ? errors.username : ''}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" className="form-control"
                            value={values.password ? values.password : ''}
                            name='password'
                            required ref={register}
                            onChange={HandleChange} />
                        <small className='error'>{errors ? errors.passowrd : ''}</small>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" 
                            type="checkbox" name="remember" 
                            onClick={HandleClick} /> Remember me
                        </label>
                    </div>
                    <button disabled={loading} type="submit" className="btn btn-success">{loading ? "Login..." : "Login"}</button>
                    <NavLink exact activeClassName="active" className="btn btn-info ml-2" to="/signup">Sign Up</NavLink>
                </form>
            </div>
        )
    }

}

export default LoginForm;