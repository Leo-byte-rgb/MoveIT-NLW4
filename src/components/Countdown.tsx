import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]) // executar uma função sempre que o segundo parâmetro mudar


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

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ): <>
                 { isActive ? (
                <button onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                    Finalizar Ciclo
                </button>

            ) :
                <button onClick={startCountdown} className={styles.countdownButton}>
                    Iniciar ciclo
            </button>
            }
            </>}




           
        </div>

    );
}