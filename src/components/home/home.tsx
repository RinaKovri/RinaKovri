//import React, { useState } from 'react';
import styles from './home.module.scss';



type HomeProps = {

}

// const Wing = () => {
//     console.log('create element');
//     // return (<div className={styles.wing} />);
//     return (
//         <>
//             <div className={styles.wing} />
//             <div className={styles.wing1}></div>
//             <div className={styles.wing2}></div>
//             <div className={styles.wing3}></div>
//             <div className={styles.wing4}></div>
//             <div className={styles.wing5}></div>
//             <div className={styles.wing6}></div>
//             <div className={styles.wing7}></div>
//         </>
//     )
// }

// const Input = () => {
//     return <input placeholder="Your input here" />;
// };

const Home: React.FC<HomeProps> = () => {
    //var a = Array()
    //a.push(<Wing />)
    // const [inputList, setInputList] = useState(a);

    // const onAddBtnClick = () => {
    //     console.log('test')
    //     setInputList(inputList.concat({}))
    // };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
        <div className={styles.hello}>Hello everyone!</div>
      </div>
            <div className={styles.homeBody}>
                    <h2 className={styles.head2}><span>My name is Ekaterina Kovrizhina and welcome to my portfolio website!</span></h2>
                <p className={styles.txt}>Click on 'projects' section to see my code.</p>
                <p className={styles.txt}>Have a look at my CV and 'about me' section and feel free to contact me any time!</p>
                <p className={styles.txt}>Looking forward to hearing from you soon!</p>
            </div>
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


            {/* <div className={styles.wrapper}>
                {
                    inputList.map((item) => (
                        <Wing />
                    ))
                }
            </div> */}
        </div>
    )
}

export default Home
