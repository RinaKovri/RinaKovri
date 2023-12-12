import React from 'react'
import styles from './aboutMe.module.scss';

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {


  return (
    <div className={styles.container}>
      <div className={styles.body}>
      <div className={styles.anim}>
        <h2 className={styles.header2}>Thank you for visiting this small website.</h2>
        </div>
        <p className={styles.text2}>I have started my career as a secretary at 20. At 25, I found myself in <i>HR</i> at an IT company. Since then, my interest in programming started growing.<br></br>In 2019 my family moved to Finland. A new page of my life has started: the <i>Finnish language</i> and <i>programming</i>.</p>
        <p className={styles.text1}>I have learned Finnish in 10 months from A0 to B1 and found a professional school where I could learn programming in finnish. So, I started my education in 2021 and it is still ongoing.<br></br> I have started learning programming at school with game development using <strong>C#</strong>. I wrote a small programms using <strong>Python</strong>. Also I learned <strong>HTML</strong>, <strong>CSS</strong>, <strong>Typescript</strong>, <strong>Javascript</strong> and <strong>React</strong>. I was learned how to use <strong>MySQL</strong> and <strong>Mongo</strong> databases.
        </p>
        <p className={styles.text1}>During the practice time in school I was working in a team on the creation of a web interface for an application for booking school rooms and involved to the start-up project. Our task was to build the system for electric charger point. I was leading the backend team, we have successfully started to write <strong>OCPP</strong> and built all the backend for the website and application.
        </p>
        <p className={styles.text1}>Also I helped to build the website in <strong>Javascript</strong> from the beginnig. During this task I was learning <strong>Bootstrap.</strong></p>
        <p className={styles.text1}>Currently I continue to study programming at the Metropolia University of Applied Sciences.</p>
        <h4 className={styles.header4}>If you would like to contact me any time with any question, please, do not hesitate!</h4><br></br><p className={styles.footer}>You can find my Linkedin page link and email link below.</p>
        <p className={styles.footer}>Thank you for your time!<br></br>Sincerely yours,<br></br>Ekaterina</p>
      </div>
    </div>
  )
};




export default AboutMe


