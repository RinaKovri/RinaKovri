import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to my page!</h1>
            <h2>My name is Ekaterina Kovrizhina.</h2>
            <h3>I am a studying programming at Varia.</h3>
            <h3>Here you can find my CV and some of my projects.</h3>
        </div>
    )
}

export default AboutMe
