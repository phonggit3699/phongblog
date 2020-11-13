import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authSignUpAPI } from '../API';
import './css/form.css';
import { NavLink} from "react-router-dom";
import {ValidateForm }from "./validationForm";



const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState({});

    
    const { HandleChange, HandleSubmit, values, errors } = ValidateForm();

    const onSubmit = async (data) => {
        try {
            HandleSubmit();
            if (Object.keys(errors).length !== 0) {
                setLoading(false); console.log('loi roi'); return
            };
            setLoading(true)
            const authLogin = await authSignUpAPI(data);
            setLoading(false);
            setCheck(authLogin)
        }
        catch (error) {
            setLoading(false);
        }
    }
    return (
        <div className="loginForm container">
            <NavLink exact activeClassName="active" className="btn btn-primary" to="/">&#8592;Home</NavLink>
            {check.status === "sucess" ? <p>Tạo thành công. Sẵn sàng đăng nhập!</p> : ''}
            {check.status === "username already exsits" ? <p>Tài khoản đã tồn tại!</p> : ''}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-3">
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="form-control"
                        value={values.username ? values.username : ''}
                        required name="username"
                        ref={register}
                        onChange={HandleChange}
                    />
                    <small className='error'>{errors ? errors.username : ''}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control"
                        name='password'
                        value={values.password ? values.password : ''}
                        required ref={register}
                        onChange={HandleChange} />
                    <small className='error'>{errors ? errors.passowrd : ''}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm password: </label>
                    <input type="password" className="form-control"
                        value={values.password2 ? values.password2 : ''}
                        name='password2' required ref={register}
                        onChange={HandleChange} />
                    <small className='error'>{errors ? errors.password2 : ''}</small>
                </div>
                <button disabled={loading} type="submit" className="btn btn-success">{loading ? "Sign Up..." : "Sign Up"}</button>
                {check.status === 'sucess' ? <NavLink exact activeClassName="active" className="btn btn-info ml-3" to="/login">Login Now</NavLink> : ''}
            </form>
        </div>
    )
}
export default SignUpForm;