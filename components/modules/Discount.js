'use client'

import React from 'react';
import styles from "./Discount.module.css"

const Discount = () => {
    return (
        <div className={styles.container}>  
            <div className={styles.text}>
                <h2>To get <span>20% Off</span> join us</h2>
                <p>You can send your e-mail to get discount cart.<br/>also you can pay back your product after 7 days...</p>
            </div>
            <div className={styles.input}>
                <form onSubmit={(e) => e.preventDefault()}>
                <input type='email' placeholder='Enter your E-mail' />
                <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Discount;