import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="cv">CV</Link>
        </li>
        <li>
          <Link to="aboutMe">About Me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
