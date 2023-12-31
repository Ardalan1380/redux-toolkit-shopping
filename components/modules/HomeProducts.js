'use client'

import React from 'react';

import styles from "./HomeProducts.module.css"
import Link from 'next/link';

import { shorthen, shorthen2 } from '../../helper/Function';
import Stars from './Stars';
import { truncate } from '../../utils/helper';

const HomeProducts = ({data}) => {
    // console.log(data)
    // console.log(data.rating)
    const {image , title, id, price, rating} = data;
    return (
        <div className={styles.container}>
           <Link href={`/products/${id}`}>
                    <article key={id}>
                            <img  src={image} alt={title}/>
                        <h2>{truncate(title , 25)}</h2>
                            <div>
                                <p>${price}</p>
                                <span>
                                <Stars stars={rating} />
                                </span>
                            </div>  
                    </article>
                        </Link>
        </div>
    );
    
};

export default HomeProducts;