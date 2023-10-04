import React from 'react';
import styles from "./CheckOut.module.css";
import Link from 'next/link';

const CheckOut = () => {
    return (
        <div className={styles.container}>
            <div>
            <h2>Check Out Successfully</h2>
            <button>
            <Link href="/products">
                Back to Shop
            </Link>
            </button>
            </div>
        </div>
    );
};

export default CheckOut;