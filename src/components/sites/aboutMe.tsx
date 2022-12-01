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
        <p className={styles.text1}>I have learned Finnish in 10 months from A0 to B1 and found a professional school where I could learn programming in finnish. So, I started my education in 2021 and it is still ongoing.<br></br> I have started learning programming at school with game development in <strong>C#</strong>. Then I had a small <strong>Python</strong> course. I also learned <strong>HTML</strong>, <strong>CSS</strong>, <strong>Typescript</strong> and practiced it.
        </p>
        <h4 className={styles.header4}>If you would like to contact me any time with any question, please, do not hesitate!</h4><br></br><p className={styles.footer}>You can find my Linkedin page link and email link below.</p>
        <p className={styles.footer}>Thank you for your time!<br></br>Sincerely yours,<br></br>Ekaterina</p>
      </div>
    </div>
  )
};




export default AboutMe


