import React from 'react'
import styles from './footer.module.scss';
//import ContactForm from './contactForm';
//import { useModalContext } from '@rintsin/common-components';
//import { Link } from 'react-router-dom';


type FooterProps = {
  onClick?: () => void
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {

  //const { modal } = useModalContext();

  // const display = () => modal({
  //   content: <ContactForm />
  // })

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <a target="_blank" rel="noreferrer" href='https://github.com/RinaKovri'>
          <div className={styles.git}></div>
        </a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/ekaterina-kovrizhina/'>
          <div className={styles.linkedin}></div>
        </a>
        {/* <button onClick={display} className={styles.btn}>
        </button> */}
        <a className={styles.email} href='mailto&#58;&#101;k%&#54;1%&#55;4%65r&#105;&#37;6E%6&#49;&#46;%72oma&#110;na&#64;g&#37;&#54;D&#97;i&#108;&#37;2E%&#54;3%6Fm'> </a>
      </div>
    </div>
  )
}

export default Footer


