import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/'>EK</Link>
      <nav className={styles.links}>
        <Link className={styles.navlinks} to="aboutMe">About Me</Link>
        <Link className={styles.navlinks} to="cv">CV</Link>
        <Link className={styles.navlinks} to="projects">Projects</Link>
      </nav>
    </div>
  )
}

export default Navbar
