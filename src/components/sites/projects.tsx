import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>HTML</h4>
          <a className={styles.btn} href='https://github.com/RinaKovri/Lagoona'>Go to GitHub</a>
          </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>C#</h4>
          <a className={styles.btn} href='https://github.com/RinaKovri/OwnGame'>Go to GitHub</a>
          </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Python</h4>
          <a className={styles.btn} href='https://github.com/RinaKovri/calculator_python'>Go to GitHub</a>
          </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Typescript, React</h4>
          <a className={styles.btn} href='https://github.com/RinaKovri/portfolio'>Go to GitHub</a> 
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Unity</h4>
          <a className={styles.btn} href='https://play.unity.com/u/RinaKovrizhina'>Go to PlayUnity</a> 
        </div>
      </div>
    </div>
  )
}

export default Projects
