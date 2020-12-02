import React, { useState, useContext, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { authLoginAPI } from '../API';
import { NavLink, Redirect } from "react-router-dom";
import './css/form.css';
import { ValidateLoginForm } from "./validationForm";
import Cookies from 'universal-cookie';
import AuthContext from '../authContext';

const LoginForm = ({ location }) => {

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState([]);
    const authContext = useContext(AuthContext);
    const cookies = new Cookies();
    const { register, handleSubmit } = useForm();
    const { HandleChange, HandleSubmit, values, errors, HandleClick } = ValidateLoginForm();
    const date = new Date();
    date.setTime(date.getTime() + (20 * 60 * 1000));
    const dateCookie = new Date(2020, 12, 10);

    useEffect(() => {
        document.title = "Login | FongBlog"
    }, []);

    const onSubmit = useCallback(async (data) => {

        try {
            HandleSubmit();
            if (Object.keys(errors).length !== 0) {
                return;
            };
            setLoading(true);
            const authLogin = await authLoginAPI(data);
            setCheck(authLogin.data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
        }
    }, [values]);
    
    if (check.status === 'sucess' && values.remember) {
        cookies.set('utokenC', check.cookie, { path: '/', expires: dateCookie });
        cookies.set('userName', check.username, { path: '/', expires: dateCookie });
        authContext.setLoggedIn(true);
    }
    if (check.status === 'sucess') {
        cookies.set('utokenS', check.cookie, { path: '/', expires: date });
        cookies.set('userName', check.username, { path: '/', expires: dateCookie });
        authContext.setLoggedIn(true);
        return (
            <Redirect
                push
                to={{
                    pathname: "/",
                    state: { referrer: location }
                }}
            />
        )
    }
    else {
        return (
            <div className="loginForm container">
                <NavLink exact activeClassName="active" className="btn btn-primary" to="/">&#8592;Home</NavLink>
                {check.status === "Wrong password" ? <p>Sai mật khẩu!</p> : ''}
                {check.status === "username doesn't exsits" ? <p>Không tìm thấy tài khoản này!</p> : ''}
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