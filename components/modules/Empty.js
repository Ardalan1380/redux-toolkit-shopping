import React from 'react';
import styles from "./Empty.module.css"
import Link from 'next/link';

const Empty = () => {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
            <h2>You have no product in your cart</h2>
            <br />
            <button>
                <Link href="/products">
                Go to shop
                </Link>
            </button>
            </div>
        </div>
    );
};

export default Empty;