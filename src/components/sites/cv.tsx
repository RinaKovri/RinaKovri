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
            <li className={styles.leftItems}>Information technology,  Bachelor</li>
            <li className={styles.leftdate}>Metropolia University of Applied Sciences, 2023-now</li>
            <li className={styles.leftItems}>Tieto- ja viestintätekniikka,  perustutkinto</li>
            <li className={styles.leftdate}>Varia ammattiopisto, 2021-2023</li>
            <li className={styles.leftItems}>Human Resources management, Bachelor</li>
            <li className={styles.leftdate}>Sinergy University, 2016-2019</li>
          </ul>
        </li>
        <li className={styles.rightSide}>
          <h2 className={styles.h2right}>Experience</h2>
          <div className={styles.rightList}>
            <h3 className={styles.rightItems}>Junior software developer, internship</h3>
            <h5 className={styles.rightdate}>Lokkit Oy, 06.2023-12.2023</h5>
            <p className={styles.rightP}>The project I worked on was to create a system of electric charging stations. During this project I:
              <br></br>- figured out how the KNX system works
              <br></br>- took part in writing OCPP and backend for the site and application
              <br></br>- helped the front-end team launch the site from scratch in the shortest possible time
              <br></br>- managed the back-end team.
              <br></br>
              <br></br>Stack: Javascript, React, HTML, CSS, NodeJS, MongoDB.</p>
            <h3 className={styles.rightItems}>HR-manager, internship</h3>
            <h5 className={styles.rightdate}>LOGRUS ry, Finland, 12.2020-03.2021</h5>
            <p className={styles.rightP}>Working practice.<br></br>I recruited employees, helped the boss organised the work of the team.</p>
            <h3 className={styles.rightItems}>HR-manager</h3>
            <h5 className={styles.rightdate}>Sidenis LLC, Russia, 2013-2019</h5>
            <p className={styles.rightP}>I started working as a secretary, then got bachelor degree in Human Resources Management and was promoted to HR manager. My responsibilities included: recruiting employees, maintaining personnel documents, organising corporate events
              <br></br>Resigned due to moving to Finland.</p>
          </div>
        </li>
      </ul>
    </div >
  )
}

export default Cv
