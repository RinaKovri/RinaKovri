import { count } from 'console';
import React, { useState, useEffect } from 'react';
import styles from './click.module.scss';

type ClickProps = {

}

const Click: React.FC<ClickProps> = () => {



    return (
        <div className={styles.container}>
            <div>
                {/* <button onClick={() => setCount(count + 1)} >Click me</button> */}
            </div>
            <div>
                <button className={styles.box}></button>
            </div>
        </div>
    )
}

export default Click
