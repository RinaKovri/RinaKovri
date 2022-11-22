import React from 'react'

type FormProps = {

}

const Form: React.FC<FormProps> = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <p style={{ margin: '0 10px', color: 'wheat' }}>name</p>
            <input type="text" id='name' />
        </div>
      <label htmlFor="name" >name</label>
      {/* </label> */}
      <label htmlFor="email" />
        email
        <input type="email" id='email' />
      {/* </label> */}
      <label htmlFor="message" />
        message
        <textarea name="message" id="message" />
      {/* </label> */}
    </div>
  )
}

export default Form
