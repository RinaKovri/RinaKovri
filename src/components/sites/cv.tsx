import React from 'react'
import { mySkills } from '../../data/skills';
import { myLanguages } from '../../data/languages';
import styles from './cv.module.scss';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.cvBody}>
      <li className={styles.leftSide}>
        <h2 className={styles.h2left}>Skills</h2>
        <ul>
          {
            mySkills && mySkills.map(x => <li key={x.key} className={styles.leftItems}>{x.skill}</li>)
          }
        </ul>
        <h2 className={styles.h2left}>Languages</h2>
        <ul>
          {
            myLanguages && myLanguages.map(x => <li key={x.key} className={styles.leftItems}>{x.skill}</li>)
          }
        </ul>
        <h2 className={styles.h2left}>Education</h2>
        <ul>
          <li className={styles.leftItems}>Tieto- ja viestintätekniikka,  perustutkinto</li>
          <li className={styles.leftdate}>Varia ammattiopisto, 2021-now</li>
          <li className={styles.leftItems}>Human Resources, Bachelor degree</li>
          <li className={styles.leftdate}>Sinergy Univercity, 2016-2019</li>
        </ul>
      </li>
      <li className={styles.rightSide}>
        <h2 className={styles.h2right}>Experience</h2>
        <div className={styles.rightList}>
          <h3 className={styles.rightItems}>Student</h3>
          <h5 className={styles.rightdate}>Varia ammattiopisto, 2021-now</h5>
          <p className={styles.rightP}>Created my own game in Unity using C#.<br></br> Wrote a simple calculator in Python.<br></br> Worked in a team on the creation of a web interface for an application for booking school rooms.<br></br> Studied Javascript, Typescript, HTML and CSS courses at the Code Academy</p>
          <h3 className={styles.rightItems}>HR-manager, internship</h3>
          <h5 className={styles.rightdate}>LOGRUS ry, Finland, 2020-2021</h5>
          <p className={styles.rightP}>My duties included helping the CEO, communication between participants, searching for volunteers, advertising</p>
          <h3 className={styles.rightItems}>HR-manager</h3>
          <h5 className={styles.rightdate}>Sidenis LLC, Russia, 2013-2019</h5>
          <p className={styles.rightP}>Was engaged in search and hiring of IT employees. Managed the company's paperwork.</p>
        </div>
      </li>
    </ul>
    </div >
  )
}

export default Cv
