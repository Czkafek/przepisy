import './Search.styles.css'
import Card from '../../components/Card/Card';

export default function Search() {
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
        }
    
        return <>
            <h1>Wyszukaj interesujący Cię przepis</h1>
            <form onSubmit={handleSubmit}>
                <input className='searchBar' type="text" placeholder='Sałatka na grilla, szparagi, śniadanie...'/>
                <input className='submitBtn' type="submit" value="Szukaj"/>
            </form>
            <div className='recipeCardsContainer'>
                <Card name='Nazwa przepisu 1' time={45} difficulty='Trudny' rate={4.96}/>
                <Card name='Nazwa przepisu 2' time={30} difficulty='Średni' rate={4.96}/>
                <Card name='Nazwa przepisu 3' time={15} difficulty='Łatwe' rate={4.96}/>
                <Card name='Nazwa przepisu 4' time={60} difficulty='Trudny' rate={4.96}/>
                <Card name='Nazwa przepisu 5' time={75} difficulty='Łatwe' rate={4.96}/>
                <Card name='Nazwa przepisu 6' time={90} difficulty='Trudny' rate={4.6}/>
                <Card name='Nazwa przepisu 7' time={105} difficulty='Łatwe' rate={4.96}/>
                <Card name='Nazwa przepisu 8' time={120} difficulty='Średni' rate={4.96}/>
                <Card name='Nazwa przepisu 9' time={240} difficulty='Średni' rate={4.96}/>
                <Card name='Nazwa przepisu 10' time={180} difficulty='Łatwe' rate={4.96}/>
                <Card name='Nazwa przepisu 11' time={45} difficulty='Trudny' rate={4.96}/>
                <Card name='Nazwa przepisu 12' time={30} difficulty='Średni' rate={4.96}/>
            </div>
        </>
}