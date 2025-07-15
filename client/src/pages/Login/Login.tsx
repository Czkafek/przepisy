import './Login.styles.css'
import { useState } from 'react';
import axios from 'axios'

export default function Login() {

    const [formData, setFormData] = useState({
        login: '', password: '', error: ''
    });

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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