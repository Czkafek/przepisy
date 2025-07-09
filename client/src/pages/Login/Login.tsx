import './Login.styles.css'
import { useState } from 'react';

export default function Login() {

    const [data, setData] = useState({
        login: '', password: '', error: ''
    });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value});
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