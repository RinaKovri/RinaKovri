import styles from './flower.module.scss'
import React /*{ useState }*/ from 'react'

type FlowerProps = {

}

const Flower: React.FC<FlowerProps> = () => {


    // const wing = document.querySelector('.wing');
    // const wing1 = document.querySelector('.wing1');
    // const wing2 = document.querySelector('.wing2');
    // const wing3 = document.querySelector('.wing3');
    // const wing4 = document.querySelector('.wing4');
    // const wing5 = document.querySelector('.wing5');
    // const wing6 = document.querySelector('.wing6');
    // const wing7 = document.querySelector('.wing7');
    // const flower = document.querySelector('flowerContainer');

    // flower?.addEventListener("click", () => {
    //     wing?.className.toggle('wing');
    // })

    return (
        
        <div className={styles.container}>
            <button className={styles.flowerContainer}>
                <div className={styles.flower}></div>
                <div className={styles.wing}></div>
                <div className={styles.wing1}></div>
                <div className={styles.wing2}></div>
                <div className={styles.wing3}></div>
                <div className={styles.wing4}></div>
                <div className={styles.wing5}></div>
                <div className={styles.wing6}></div>
                <div className={styles.wing7}></div>
            </button>
        </div>
    )
}

export default Flower
