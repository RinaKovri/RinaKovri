import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <div className={styles.container}>
            <h1>Header</h1>
            <p>My supercool component</p>
        </div>
    )
}

export default AboutMe
