import './Login.styles.css'
import { useState } from 'react';
import axios from 'axios'

export default function Login() {

    const [formData, setFormData] = useState({
        login: '', password: '', error: ''
    });

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(formData.login.length > 2 && ((formData.login.includes('@') && formData.login.length < 255) || (formData.login.match("^[a-zA-Z0-9._]+$") && formData.login.length < 51)))) {
            setFormData({ ...formData, error: "Login must be valid username or email" })
            return;
        }
        if (!(formData.password.length > 7 && formData.password.length < 129)) {
            setFormData({ ...formData, error: "Password must be between 8 and 128 characters long" });
            return;
        }
        try {
            console.log()
            const {data} = await axios.post("http://localhost:3000/user/login", {
                login: formData.login,
                password: formData.password
            });
            console.log(data);
            localStorage.setItem("token", data.accessToken);
            console.log(localStorage.getItem("token"));
        } catch(error) {
            console.log(error);
            if (typeof error === "string")
                setFormData({ ...formData, error: error })
            else if (error instanceof Error)
                setFormData({ ...formData, error: error.message })
        }
    };
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };


    return <>
        <form className='accountForm' onSubmit={handleSubmit}>
            <h2>Zaloguj się</h2>
            <label>Nazwa lub Email</label>
            <input type="text" name='login' onChange={handleChange} placeholder='Nazwa lub email' />
            <label>Hasło</label>
            <input type="password" name='password' onChange={handleChange} placeholder='Hasło' />
            <input type="submit" value='Zaloguj się' />
        </form>
    </>
}