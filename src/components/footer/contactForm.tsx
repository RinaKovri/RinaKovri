import React, { useState } from 'react'
import styles from './contactForm.module.scss'

type ContactFormProps = {

}

const ContactForm: React.FC<ContactFormProps> = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Contact me</h1>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
                <div className={styles.input}>
                    <label>Enter your name:
                        <input
                            type='text'
                            name='username'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>Enter your email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className={styles.message}>
                    <textarea
                        onChange={e => setMessage(e.target.value)}
                        value={message} />
                    <button type='submit' className={styles.btn}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
