import React from 'react'
import styles from './cv.module.scss';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anim}>
        <h1><span>CV</span></h1>
          <h2><span>Education</span></h2>
          <div className={styles.text}>
            <p className={styles.years}><span>2021-now</span></p>
            <p><span>Varia ammattiopisto, Vantaa, Information and communication technologies, Bachelor's degree</span></p>
            <p className={styles.years}><span>2016-2019</span></p>
            <p><span>Synergy Univercity, Moscow, Bachelor's degree, Human Resources</span></p>
            <p className={styles.years}><span>2005-2010</span></p>
            <p><span>INGECON Univercity, St.Petersburg, Bachelor's degree, PR</span></p>
          </div>
        </div>
        <div>
          <h2><span>Experience</span></h2>
          <div className={styles.text}>
            <p className={styles.years}><span>2021-now</span></p><p><span>Varia ammattiopisto, student</span></p>
            <p className={styles.years}><span>2020-2021</span></p><p><span>Logrus ry, internship as HR Manager</span></p>
            <p className={styles.years}><span>2013-2019</span></p><p><span>Sidenis LLC, HR Manager</span></p>
            <p className={styles.years}><span>2008-2019</span></p><p><span>I worked as secretary in a few different companies during this time period</span></p>
          </div>
        </div>
      </div>
  )
}

export default Cv
