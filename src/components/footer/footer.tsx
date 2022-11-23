import React from 'react'
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
        <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri'>
          <div className={styles.git}></div>
          </a>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/ekaterina-kovrizhina/'>
            <div className={styles.linkedin}></div>
          </a>
        <button onClick={display} className={styles.btn}>
        </button>
        <button className={styles.email}></button>
      </div>
    </div>
  )
}

export default Footer


