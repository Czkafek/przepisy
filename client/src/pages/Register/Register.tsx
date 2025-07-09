import './Register.styles.css'
import { useState } from 'react';

export default function Register() {

    const [data, setData] = useState({
        name: '', email: '', password: '', error: ''
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
            <h2>Zarejestruj się</h2>
            <label>Nazwa</label>
            <input value={data.name} onChange={handleChange} name='name' type="text" placeholder='Nazwa' />
            <label>Email</label>
            <input value={data.email} onChange={handleChange} name='email' type="text" placeholder='Email' />
            <label>Hasło</label>
            <input value={data.password} onChange={handleChange} name='password' type="password" placeholder='Hasło' />
            <input type="submit" value='Zaloguj się' />
        </form>
    </>
}