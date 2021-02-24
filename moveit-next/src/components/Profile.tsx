import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/43625981?s=460&u=2b859264410af005dddb7993713948e182bff8f7&v=4" alt="Avatar"/>

            <div>
                <strong>Gabriel Felix</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}