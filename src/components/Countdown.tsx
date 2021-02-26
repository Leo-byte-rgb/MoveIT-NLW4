import { time } from 'console';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

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