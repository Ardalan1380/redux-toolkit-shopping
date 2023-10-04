import React from 'react';
import styles from "./AmountButton.module.css";
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButton = ({increase , decrease , amount}) => {
        // console.log(increase)
        // console.log(amount)
    return (
        <div className={styles.container}>
            <button 
                type='button'
                className={amount < 2 && styles.opacity}
                onClick={decrease}
                >
                  <FaMinus style={{color:"red"}} />
            </button>
            <span>{amount}</span>
            <button 
                type='button'
                className={styles.inc}
                onClick={increase}
            >
                <FaPlus style={{color:"green"}} />
            </button>
        </div>
    );
};

export default AmountButton;