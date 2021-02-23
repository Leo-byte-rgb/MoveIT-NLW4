import styles  from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://i.ytimg.com/vi/JyFM-p4Kbh4/maxresdefault.jpg" alt="Leonardo A."/>
            <div className="">
                <strong>Leonardo Agostini Costa</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>

            </div>
        </div>
    )
}