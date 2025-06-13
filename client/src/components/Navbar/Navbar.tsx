import { useState } from 'react';
import './Navbar.styles.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const [subCategories, setSubCategories] = useState();
    const categories = {
        "main dish": ["Mięsne", "Rybne i owoce morza", "Wegetariańskie", "Wegańskie", "Jednogarnkowe", "Z grilla i BBQ"],
        "soups": ["Żurek, rosół i tradycyjne", "Kremy i velouté", "Zupy zimne", "Międzynarodowe", "Wegańskie i wegetariańskie"],
        "appetizers": ["Sałatki", "Kanapki i tosty", "Tapas i mezze", "Dips i pasty", "Przekąski na przyjęcia"],
        "desserts": ["Ciasta i torty", "Desery na łyżkę", "Lody i sorbety", "Bez pieczenia", "Fit desery"],
        "breakfast": ["Owsianki i smoothie bowl", "Jajecznica i omlet", "Naleśniki i placki", "Tosty i kanapki", "Fit śniadania"],
        "international": ["Włoska", "Azjatycka", "Meksykańska", "Francuska", "Śródziemnomorska", "Polska tradycyjna"],
        "baking": ["Chleby i bułki", "Ciasta drożdżowe", "Ciastka", "Tarty i quiche", "Pizza i focaccia"],
        "beverages": ["Koktajle i smoothie", "Herbaty i kawy", "Napoje alkoholowe", "Soki i lemonady", "Napoje zimowe"],
        "special diets": ["Bezglutenowe", "Keto", "Paleo", "Dla diabetyków", "Wysokobiałkowe"],
        "preserves": ["Dżemy i konfitury", "Kiszonki", "Marynaty", "Przetwory mięsne", "Suszone owoce i warzywa"]
    };

    const handleCategorieHover = (categorie:string) => {
        console.log(categorie);
    }

    return <div className='NavbarContainer'>
        <div className='Navbar'>
            <Link className={location.pathname == "/" ? "currentPage" : ""} to="/">Strona główna</Link>
            <div className='recipes'>Przepisy</div>
            <Link className={location.pathname == "/search" ? "currentPage" : ""} to="/search">Szukaj</Link>
            <Link className={location.pathname == "/account" ? "currentPage" : ""} to="/account">Konto</Link>
            <div className='dropdown'>
                <div className='contentContainer'>
                    <div className='categories'>
                        <Link to={"/myrecipes"} className='categorie'>Moje Przepisy</Link>
                        <div onMouseEnter={() => handleCategorieHover("main dish")} className='categorie'>Dania główne</div>
                        <div onMouseEnter={() => handleCategorieHover("soups")} className='categorie'>Zupy</div>
                        <div onMouseEnter={() => handleCategorieHover("appetizers")} className='categorie'>Przystawki i przekąski</div>
                        <div onMouseEnter={() => handleCategorieHover("desserts")} className='categorie'>Desery</div>
                        <div onMouseEnter={() => handleCategorieHover("breakfast")} className='categorie'>Śniadania</div>
                        <div onMouseEnter={() => handleCategorieHover("international")} className='categorie'>Kuchnia międzynarodowa</div>
                        <div onMouseEnter={() => handleCategorieHover("beverages")} className='categorie'>Wypieki</div>
                        <div onMouseEnter={() => handleCategorieHover("special diets")} className='categorie'>Specjalne diety</div>
                        <div onMouseEnter={() => handleCategorieHover("preserves")} className='categorie'>Przetwory</div>
                    </div>
                    {
                    subCategories &&
                    <div className='subCategories'>
                        <Link to={"/recipe"} className='categorie'>Mięsne</Link>
                        <Link to={"/recipe"} className='categorie'>Rybne i owoce morza</Link>
                        <Link to={"/recipe"} className='categorie'>Wegetariańskie</Link>
                        <Link to={"/recipe"} className='categorie'>Wegańskie</Link>
                        <Link to={"/recipe"} className='categorie'>Jednogarnkowe</Link>
                        <Link to={"/recipe"} className='categorie'>Z grilla i BBQ</Link>
                    </div>
                    }
                </div>
                
                
            </div>
        </div>
    </div>
}