import React, { useEffect, useState } from 'react'
import { IRepo } from '../../types/gitHubData';
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {

  const endpoint = "https://api.github.com/users/RinaKovri/repos";

  const [githubData, setGithubData] = useState<IRepo[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {
          githubData && githubData.map(x => (
            <div key={x.id} className={styles.cardBody}>
              <div className={styles.cardTitle}>{x.name}</div>
              <div className={styles.txt}>{x.description}</div>
              <div className={styles.cardFooter}>
              <a target="_blank" rel="noreferrer" href={x.html_url} className={styles.btn}>GitHub</a>
              </div>
            </div>
          ))
        }

      </div>
    </div>
   
  )
}

export default Projects
