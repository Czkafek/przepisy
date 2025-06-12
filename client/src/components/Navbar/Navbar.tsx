import './Navbar.styles.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const location = useLocation();

    return <div className='NavbarContainer'>
        <div className='Navbar'>
            <Link className={location.pathname == "/" ? "currentPage" : ""} to="/">Strona główna</Link>
            <Link className={location.pathname == "/recipe" ? "currentPage" : ""} to="/recipe">Przepisy</Link>
            <Link className={location.pathname == "/search" ? "currentPage" : ""} to="/search">Szukaj</Link>
            <Link className={location.pathname == "/account" ? "currentPage" : ""} to="/account">Konto</Link>
        </div>
    </div>
}