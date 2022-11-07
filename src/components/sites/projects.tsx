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
            <button className={styles.btn}>GitHub
              <a href='https://github.com/RinaKovri/Lagoona'></a>
            </button>
          </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>C#</h4>
          <button className={styles.btn} >GitHub
            <a href='https://github.com/RinaKovri/OwnGame'></a>
          </button>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Python</h4>
          <button className={styles.btn}>GitHub
            <a href='https://github.com/RinaKovri/calculator_python'></a>
          </button>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>React</h4>
          <button className={styles.btn}>GitHub
            <a href='https://github.com/RinaKovri/portfolio'></a>
          </button>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>Unity</h4>
          <button className={styles.btn}>PlayUnity
            <a href='https://play.unity.com/u/RinaKovrizhina'></a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
