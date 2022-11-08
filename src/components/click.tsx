import React, { useState, useEffect } from 'react';
import styles from './click.module.scss';

type ClickProps = {

}

const Click: React.FC<ClickProps> = () => {
/*var boxElement = document.querySelector('box');
boxElement?.addEventListener('transitioned', ontransitionend);*/

    return (
        <div className={styles.container}>
            <div>
                <button className={styles.flower} /*onClick={() => setCount(count + 1)}*/ >Click me</button>
            </div>
            <div>
                <button className={styles.box}></button>
            </div>
        </div>
    )
}

export default Click
