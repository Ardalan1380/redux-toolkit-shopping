import React from 'react';
import styles from "./List.module.css"
import { truncate } from '../../utils/helper';
import Link from 'next/link';

const List = ({products}) => {
    
    return (
        <div className={styles.container}>
            {
                products.map(({ title, image, id, price, description }) => (
                    <article key={id}>                        
                            <img src={image} alt={title} />
                        <div className={styles.product__info}>
                            <h3>{title}</h3>
                            <p className={styles.price}>${price}</p>
                            <p className={styles.description}>{truncate(description , 120)}</p>
                            <button>
                                <Link href={`/products/${id}`}>
                                    Details
                                </Link>
                            </button>
                        </div>
                    </article>
                ))
            }
        </div>
    );
};

export default List;