import './Card.styles.css'
import star from '../../assets/star.svg'

type PrivateProps = {
    name: string,
    time: number,
    difficulty: string,
    rate: number
}

export default function Card({name, time, difficulty, rate} : PrivateProps) {
    return <div className='Card'>
        <div className='imgContainer'>
            <div className='tmpSqr'></div>
        </div>
        <h2>{name}</h2>
        <div className='stats'>
            <p className='time'>{time} minut</p>
            <p className={difficulty == "Trudny" ? "red" : difficulty == "Średni" ? "orange" : "green"} >{difficulty}</p>
            <div className='rate'>
                <img src={star} alt="" />
                <p>{rate}</p>
            </div>
        </div>
    </div>
}