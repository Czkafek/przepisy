import './Navbar.styles.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div className='NavbarContainer'>
        <div className='Navbar'>
            <Link to="/">Strona główna</Link>
            <Link to="/recipe">Przepisy</Link>
            <Link to="/search">Szukaj</Link>
            <Link to="/account">Konto</Link>
        </div>
    </div>
}