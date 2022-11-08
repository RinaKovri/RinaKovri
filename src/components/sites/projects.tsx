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
            <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri/Lagoona'className={styles.btn}>GitHub</a>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>C#</h4>
            <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri/OwnGame'className={styles.btn}>GitHub</a>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Python</h4>
            <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri/calculator_python'className={styles.btn}>GitHub</a>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>React</h4>
            <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri/portfolio'className={styles.btn}>GitHub</a>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Unity</h4>
          <a target="_blank" rel="noreferrer" href='https://play.unity.com/u/RinaKovrizhina' className={styles.btn}>PlayUnity</a>
        </div>
      </div>
    </div>
   
  )
}

export default Projects
