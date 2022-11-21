import React from 'react'
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import ContactForm from './contactForm';
import { useModalContext } from '@rintsin/common-components';


type FooterProps = {
onClick?: () => void
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {

  const { modal } = useModalContext();

  const display = () => modal({
    content: <ContactForm />
  })

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
      <div><Link to='https://github.com/RinaKovri'>
        <a target="_blank" rel="noreferrer">
        <div className={styles.git}></div>
        </a>
      </Link></div>
      <div><Link to='https://www.linkedin.com/in/ekaterina-kovrizhina/'>
        <a target="_blank" rel="noreferrer">
        <div className={styles.linkedin}></div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="33" height="33" focusable="false">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg> */}
        </a></Link></div>
        <div className={styles.btn}><div onClick={display}>
        </div></div>
        </div>
    </div>
  )
}

export default Footer


