import React from 'react';
import styles from "./GridProduct.module.css"
import Image from 'next/image';
import Stars from './Stars';
import Link from 'next/link';
import { truncate } from '../../utils/helper';


const Grid = ({products}) => {
    console.log(products)
    return (
        <>
            <div className={styles.container}>
        {
            products.map(({title , id, image , price, rating}) => (
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
                ))
            }
            </div>
            </>
    );
};

export default Grid;