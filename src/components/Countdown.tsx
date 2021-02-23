import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    
    function startCountdown() {
        active ? setActive(false) : setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time -1)
            }, 1000)
        }
        if (!active) setTime(25 * 60); 
    }, [active, time]) // executar uma função sempre que o segundo parâmetro mudar
    
    return (
        <div className="">
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div className="">
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
            </div>
            <button onClick={startCountdown} className={styles.countdownButton} style={active ? {backgroundColor: "#E83F5B" } : { backgroundColor: "#5965E0"}}>{!active ? 'Iniciar um ciclo' : 'Finalizar ciclo'}</button>

        
        </div>

    );
}