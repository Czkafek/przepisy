import './Home.styles.css'
import heroImg from '../../assets/hero.jpg'

export default function Home() {
    return <>
        <img className='hero' src={heroImg} alt="" />
    </>
}