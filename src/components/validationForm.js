import  { useState } from 'react';

export default function ValidateForm() {
    const [values, setValues] = useState([{
        username: '',
        password: '',
        passowrd2: ''
    }]);

    const [errors, setErrors] = useState([]);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value});
    }

    const HandleSubmit = () => {
        let error = {};
        if (!values.username.trim()) {
            error.username = "User name required";
        } else if (values.username.trim().length < 6) {
            error.username = "User name needs to be 6 characters long";
        }

        if (!values.password) {
            error.password = "Password name required";
        } else if (values.password.length < 6) {
            error.passowrd = "Password needs to be 6 characters long";
        }


        if (!values.password2) {
            error.password2 = "Confirm password name required";
        } else if (values.password2.length < 6) {
            error.password2 = "Password needs to be 6 characters long";
        }

        if (values.password2 !== values.password) {
            error.password2 = "Password do not match";
        }
        setErrors(error);
    }
    return { HandleChange, HandleSubmit, values, errors,setValues };
}
