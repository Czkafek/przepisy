import './Login.styles.css'

export default function Login() {

    const handleSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
    }


    return <>
        <form className='accountForm' onSubmit={handleSubmit}>
            <h2>Zaloguj się</h2>
            <label>Nazwa lub Email</label>
            <input type="text" placeholder='Nazwa lub email' />
            <label>Hasło</label>
            <input type="password" placeholder='Hasło' />
            <input type="submit" value='Zaloguj się' />
        </form>
    </>
}