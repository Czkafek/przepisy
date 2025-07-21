import './Register.styles.css';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function Register() {

    const [formData, setFormData] = useState({
        name: '', email: '', password: '', error: {
            name: '',
            msg: ''
        }
    });

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!(formData.name.match('^[a-zA-Z0-9._]+$') && formData.name.length > 2 && formData.name.length < 50)) {
            setFormData({ ...formData, error: {name: 'name', msg: "Username can not contains any special letter and must be between 3 and 50 characters long"}});
            return;
        }
        if(!(formData.email.includes('@') && formData.email.length > 2 && formData.email.length < 255)) {
            setFormData({ ...formData, error: {name: 'email', msg: "Must be valid email and be max 254 characters long"}});
            return;
        }
        if(!(formData.password.length > 7 && formData.password.length < 129)) {
            setFormData({ ...formData, error: { name: "password", msg: "Password must be between 8 and 128 characters long" } });
            return;
        }
        try {
            const {data} = await axios.post("http://localhost:3000/user/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            console.log(data);
        } catch (error) {
            console.log(error);
            if(typeof error === "string") {
                setFormData({ ...formData, error: { name: "system", msg: error } });
            }
            else if (error instanceof AxiosError) {
                setFormData({ ...formData, error: { name: "system", msg: error.response?.data.message } });
            }
        }
    };
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };


    return <>
        <form className='accountForm' onSubmit={handleSubmit}>
            <h2>Zarejestruj się</h2>
            <label>Nazwa</label>
            <input value={formData.name} onChange={handleChange} name='name' type="text" placeholder='Nazwa' />
            { formData.error.name === "name" && <p className='error'>{formData.error.msg}</p>}
            <label>Email</label>
            <input value={formData.email} onChange={handleChange} name='email' type="text" placeholder='Email' />
            { formData.error.name === "email" && <p className='error'>{formData.error.msg}</p>}
            <label>Hasło</label>
            <input value={formData.password} onChange={handleChange} name='password' type="password" placeholder='Hasło' />
            { formData.error.name === "password" && <p className='error'>{formData.error.msg}</p>}
            <input type="submit" value='Zaloguj się' />
            { formData.error.name === "system" && <p className='error'>{formData.error.msg}</p>}
        </form>
    </>
}