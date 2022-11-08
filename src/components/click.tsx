import React, { useState, useEffect } from 'react';
import styles from './click.module.scss';

type ClickProps = {

}

const Click: React.FC<ClickProps> = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked the button ${count} times`;
    });

    return (
        <div className={styles.container}>
            <div>
                <button className={styles.flower} onClick={() => setCount(count + 1)} >Click me</button>
            </div>
        </div>
    )
}

export default Click
