import './Register.styles.css'

export default function Register() {

    const handleSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
    }


    return <>
        <form className='accountForm' onSubmit={handleSubmit}>
            <h2>Zarejestruj się</h2>
            <label>Nazwa</label>
            <input type="text" placeholder='Nazwa' />
            <label>Email</label>
            <input type="text" placeholder='Email' />
            <label>Hasło</label>
            <input type="password" placeholder='Hasło' />
            <input type="submit" value='Zaloguj się' />
        </form>
    </>
}