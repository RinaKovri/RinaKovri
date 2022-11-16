import React from 'react'
import styles from './cv.module.scss';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={styles.h2left}>Skills</h2>
        <ul className={styles.leftList}>
          <li className={styles.leftItems}>HTML</li>
          <li className={styles.leftItems}>CSS</li>
          <li className={styles.leftItems}>TypeScript</li>
          <li className={styles.leftItems}>Unity + C#</li>
          <li className={styles.leftItems}>Git</li>
        </ul>
        <h2 className={styles.h2left}>Languages</h2>
        <ul className={styles.leftList}>
          <li className={styles.leftItems}>Russian - native</li>
          <li className={styles.leftItems}>English - upper-intermediate</li>
          <li className={styles.leftItems}>Finnish - intermediate</li>
        </ul>
        <h2 className={styles.h2left}>Education</h2>
        <ul className={styles.leftList}>
          <li className={styles.leftItems}>Tieto- ja viestintätekniikka,  perustutkinto</li>
          <li className={styles.dateP}>Varia ammattiopisto, 2021-now</li>
          <li className={styles.leftItems}>Human Resources, Bachelor degree</li>
          <li className={styles.dateP}>Sinergy Univercity, 2016-2019</li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.h2right}>Experience</h2>
        <div className={styles.rightList}>
          <h3 className={styles.rightItems}>Student</h3>
          <h5 className={styles.dateP}>Varia ammattiopisto, 2021-now</h5>
          <p className={styles.rightP}>Created my own game in Unity using C#.</p>
          <p className={styles.rightP}>Wrote a simple calculator in Python.</p>
          <p className={styles.rightP}>Worked in a team on the creation of a web interface for an application for booking school rooms.</p>
          <p className={styles.rightP}>Studied Javascript, Typescript, HTML and CSS courses at the Code Academy</p>
          <h3 className={styles.rightItems}>HR-manager, internship</h3>
          <h5 className={styles.dateP}>LOGRUS ry, Finland, 2020-2021</h5>
          <p className={styles.rightP}>My duties included helping the CEO, communication between participants, searching for volunteers, advertising</p>
          <h3 className={styles.rightItems}>HR-manager</h3>
          <h5 className={styles.dateP}>Sidenis LLC, Russia, 2013-2019</h5>
          <p className={styles.rightP}>Was engaged in search and hiring of IT employees. Managed the company's paperwork.</p>
        </div>
      </div>
    </div>
  )
}

export default Cv
