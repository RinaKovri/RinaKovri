import React from 'react'
import styles from './aboutMe.module.scss';

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
      <h2>Hello everyone!</h2>
      <h3>Thank you for visiting this small website.</h3>
      <p>I have started my career as a secretary at 20.
         At 25, I found myself in HR at an IT company. Since then, my interest in programming started growing.</p>
      <p>In 2019 my family moved to Finland. A new page of my life has started: the Finnish language and programming.</p>
      <p>I have learned Finnish in 10 months from A0 to B1 and found a professional school where I could learn programming in finnish.
So, I started my education in 2021 and it is still ongoing.</p>
<p>I have started learning programming at school with game development in C#. Then I had a small Python course. I also learned HTML, CSS, Typescript and practiced it.
</p>
<h3>If you would like to contact me any time with any question, please, do not hesitate!</h3>
<h3>You can leave a message below, email or call me at any time!</h3>
<h4>Thank you for your time!</h4>
<h4>Sincerely yours,</h4>
<h4>Ekaterina</h4>
      </div>
    </div>
  )
}

export default AboutMe
