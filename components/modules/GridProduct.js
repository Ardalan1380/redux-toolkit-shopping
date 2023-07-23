import React from 'react';
import styles from "./GridProduct.modul.css"
import Image from 'next/image';
import Stars from './Stars';

const GridProduct = ({products}) => {
    console.log(products)
    return (
        <div className={styles.container}>
            {/* {
                products.map(({title , id, image , price, rating}) => (
                    <article key={id}>
                        <Link href='#'>
                            <Image  src={image} width={200} height={200} alt={title}/>
                        </Link>
                        <h2>{title}</h2>
                            <div>
                                <p>${price}</p>
                                <Stars stars={rating} />
                            </div>
                    </article>
                ))
            } */}
        </div>
    );
};

export default GridProduct;