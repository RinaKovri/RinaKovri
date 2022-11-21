import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.navlinks}>
        <Link to="aboutMe">About Me</Link>
        </div>
        <div className={styles.navlinks}>
          <Link to="cv">CV</Link>
        </div>
        <div className={styles.navlinks}>
          <Link to="projects">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
