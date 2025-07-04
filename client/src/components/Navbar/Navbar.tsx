import { useEffect, useState } from 'react';
import './Navbar.styles.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const [subCategories, setSubCategories] = useState("");
    const categories = [
        {
            name: "main dish",
            subcategories: ["Mięsne", "Rybne i owoce morza", "Wegetariańskie", "Wegańskie", "Jednogarnkowe", "Z grilla i BBQ"]
        },
        {
            name: "soups",
            subcategories: ["Żurek, rosół i tradycyjne", "Kremy i velouté", "Zupy zimne", "Międzynarodowe", "Wegańskie i wegetariańskie"]
        },
        {
            name: "appetizers",
            subcategories: ["Sałatki", "Kanapki i tosty", "Tapas i mezze", "Dips i pasty", "Przekąski na przyjęcia"]
        },
        {
            name: "desserts",
            subcategories: ["Ciasta i torty", "Desery na łyżkę", "Lody i sorbety", "Bez pieczenia", "Fit desery"]
        },
        {
            name: "breakfast",
            subcategories: ["Owsianki i smoothie bowl", "Jajecznica i omlet", "Naleśniki i placki", "Tosty i kanapki", "Fit śniadania"]
        },
        {
            name: "international",
            subcategories: ["Włoska", "Azjatycka", "Meksykańska", "Francuska", "Śródziemnomorska", "Polska tradycyjna"]
        },
        {
            name: "baking",
            subcategories: ["Chleby i bułki", "Ciasta drożdżowe", "Ciastka", "Tarty i quiche", "Pizza i focaccia"]
        },
        {
            name: "beverages",
            subcategories: ["Koktajle i smoothie", "Herbaty i kawy", "Napoje alkoholowe", "Soki i lemonady", "Napoje zimowe"]
        },
        {
            name: "special diets",
            subcategories: ["Bezglutenowe", "Keto", "Paleo", "Dla diabetyków", "Wysokobiałkowe"]
        },
        {
            name: "preserves",
            subcategories: ["Dżemy i konfitury", "Kiszonki", "Marynaty", "Przetwory mięsne", "Suszone owoce i warzywa"]
        }
    ];

    const handleCategorieHover = (categorie:string) => {
        setSubCategories(categorie);
    }

    useEffect(() => {
        if(isHovered) {
            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                console.log(target.closest(".recipesContainer"))
                if(!target.closest(".recipesContainer")) {
                    setIsHovered(false);
                    setSubCategories("");
                }
            }

            document.addEventListener('mouseover', handleMouseOver);

            return () => {
                document.removeEventListener("mouseover", handleMouseOver);
            };
        }
    }, [isHovered])
    useEffect(() => {
        setIsHovered(false);
    }, [location.pathname])

    return <div className='NavbarContainer'>
        <div className='Navbar'>
            <Link className={`${location.pathname == "/" ? "currentPage" : ""} option`} to="/">Strona główna</Link>
            <div className='recipesContainer'>
                <div className='recipes' onMouseEnter={() => setIsHovered(true)}>
                    Przepisy
                    { isHovered && <div className='helpElement'></div> }
                </div>
                {
                isHovered &&
                <div className='dropdown'>
                    <div className='contentContainer'>
                        <div className='categories'>
                            <Link to={"/myrecipes"} className='categorie myRecipes'>Moje Przepisy</Link>
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
                            {categories.map((category) => {
                                if(category.name == subCategories) {
                                    return category.subcategories.map((sub, subIndex) => {
                                        return <Link key={subIndex} to={`/recipe/${sub}`} className='categorie sub'>{sub}</Link>
                                    });
                                }
                            })}
                        </div>
                        }
                    </div>
                </div>
                }
            </div>
            <Link className={`${location.pathname == "/search" ? "currentPage" : ""} option`} to="/search">Szukaj</Link>
            <Link className={`${location.pathname == "/account" ? "currentPage" : ""} option`} to="/account">Konto</Link>
            <Link to="/login" className='loginBtn'><button>Zaloguj się</button></Link>
            <Link to="/register" className='registerBtn'><button>Zarejestruj się</button></Link>
        </div>
    </div>
}