'use client'

import React from 'react';

import styles from "./HomeProducts.module.css"
import Link from 'next/link';

import { shorthen, shorthen2 } from '../../helper/Function';
import Stars from './Stars';

const HomeProducts = ({data}) => {
    // console.log(data)
    // console.log(data.rating)
    const {image , title, id, price, rating} = data;
    return (
        <div className={styles.container}>
           <div className={styles.main}>
                <Link href="/">
                <img src={image} alt={title} />
                <h2>{shorthen(title)}</h2>
                <div className={styles.pr}>
                <p>${price}</p>
                <Stars stars={rating} />
                </div>
                </Link>
           </div>
        </div>
    );
    
};

export default HomeProducts;