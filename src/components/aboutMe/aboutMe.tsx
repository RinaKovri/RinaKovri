import React from 'react'
import styles from './aboutMe.module.scss'
import Dandelion_white from './dandelion_white.png';


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
            <div className={styles.anim}>
                <h1><span>Welcome to my page!</span></h1>
            </div>
            <h2>My name is Ekaterina Kovrizhina.</h2>
            <h3>I am a studying programming at Varia.</h3>
            <h3>Here you can find my CV and some of my projects.</h3>
            </div>
            <button className={styles.animation}>
            </button>
        </div>
    )
}

export default AboutMe
