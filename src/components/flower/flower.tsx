import styles from './flower.module.scss'
import React from 'react'

type FlowerProps = {

}

const Flower: React.FC<FlowerProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flowerContainer}>
                <div /*onClick={onAddBtnClick}*/ className={styles.flower}></div>
                <div className={styles.wing}></div>
                <div className={styles.wing1}></div>
                <div className={styles.wing2}></div>
                <div className={styles.wing3}></div>
                <div className={styles.wing4}></div>
                <div className={styles.wing5}></div>
                <div className={styles.wing6}></div>
                <div className={styles.wing7}></div>
            </div>
        </div>
    )
}

export default Flower
