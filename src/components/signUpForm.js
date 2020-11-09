import React , { useState } from "react";
import { useForm } from "react-hook-form";
import { authLoginAPI } from '../API';
import './css/form.css';
import { NavLink } from "react-router-dom";


const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [erorr, setErorr] = useState('');
    const [check, setCheck] = useState({});
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const authLogin = await authLoginAPI(data);
            setLoading(false);
            setCheck(authLogin)
          
        }
        catch (error) {
            setErorr(error.messages);
            setLoading(false);
        }

    }

    return (
        <div className="loginForm container">
            <NavLink exact activeClassName="active" className="btn btn-primary" to="/">&#8592;Home</NavLink>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" className="form-control" id="username" name="username" required ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" name='password' required ref={register} />
                </div>
             
                <button disabled={loading} type="submit" className="btn btn-success">{loading ? "Sign Up..." : "Sign Up"}</button>
                
            </form>
            { erorr ? <p className="erorr">{erorr} </p> : <p className="sucess"></p>}
        </div>
    )
}
export default SignUpForm;