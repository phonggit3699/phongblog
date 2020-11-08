import React , { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewPostAPI } from '../API';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [erorr, setErorr] = useState('');
    const [check, setCheck] = useState({});
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const getPost = await createNewPostAPI(data);
            setLoading(false);
            setCheck(getPost)
        }
        catch (error) {
            setErorr(error.messages);
            setLoading(false);
        }

    }
    const onTyping = () => {
        setCheck({ status: "typing" })
    }
    console.log(check)
    return (
        <div className="loginForm">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="user">Username: </label>
                    <input type="text" className="form-control" id="user" name="user" required ref={register} onChange={onTyping} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" name='passoword' required ref={register} onChange={onTyping} />
                </div>
             
                <button disabled={loading} type="submit" className="btn btn-success">{loading ? "Loging..." : "Login"}</button>
            </form>
            { erorr ? <p className="erorr">{erorr} </p> : <p className="sucess">{check.status === "sucess" ? "Tạo thành công" : ""}</p>}
        </div>
    )
}
export default LoginForm;