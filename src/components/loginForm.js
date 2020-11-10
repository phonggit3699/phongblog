import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { authLoginAPI } from '../API';
import { NavLink, Redirect, useLocation } from "react-router-dom";
import './css/form.css';
import ValidateForm from "./validationForm";
import GetNameLogin from './getNameLogin';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState([]);
    const { HandleChange, HandleSubmit, values, errors } = ValidateForm();
    const { setLoginName } = GetNameLogin();
    let location = useLocation();
    console.log(check.status);
    const onSubmit = async (data) => {
        console.log(data);
        try {
            HandleSubmit();
            if (Object.keys(errors).length !== 0) {
                setLoading(false); console.log('loi roi'); return
            };
            setLoading(true);
            const authLogin = await authLoginAPI(data);
            setLoading(false);
            setCheck(authLogin);
        }
        catch (error) {
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     if (check.status === 'sucess') {
    //         setLoginName(check.username);
    //     }
    // }, [])

    if (check.status === 'sucess') {
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
                    <button disabled={loading} type="submit" className="btn btn-success">{loading ? "Loging..." : "Login"}</button>
                    <NavLink exact activeClassName="active" className="btn btn-info ml-2" to="/signup">Sign Up</NavLink>
                </form>
            </div>
        )
    }

}

export default LoginForm;