import './Recipe.styles.css'
import { useParams } from 'react-router-dom'

export default function Recipe() {

    const { name } = useParams();

    return <>
        <h1>Przepisy - {name}</h1>
    </>
}