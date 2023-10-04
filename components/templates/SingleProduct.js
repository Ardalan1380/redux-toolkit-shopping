import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { fetchSingleProduct } from '../../redux/featuers/singleProduct/singleproductSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./SingleProduct.module.css";
import Image from 'next/image';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import Link from 'next/link';
import Stars from '../modules/Stars';
import AddToCart from '../modules/AddToCart';
import { quantityCount } from '../../helper/Function';
import { decrease } from '../../redux/featuers/cart/cartSlice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const id = useParams().productsId;
   
    const {
        single_product_loading : loading,
        single_product_error : error,
        single_product : product
    } = useSelector((state) => state.single);
    

    const {title , price  ,description, category , image ,rating} = product
    // console.log(id)  
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    } , [id]);

    if(loading) {
        <Loader />
    }

    if(error) {
        <Error />
    }
    
    // console.log(loading)
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.info}>
                <button className={styles.btn}>
                    <Link href="/products">Back to shop</Link>
                </button>
                <h2>{title}</h2>
                <div className={styles.stars}>
                    <Stars stars={rating} />
                </div>
                <p className={styles.price}>Price: <span>${price}</span></p>
                <p className={styles.category}>
                    Category: <span>{category}</span>
                    </p>
                <p className={styles.des}>{description}</p>
                <AddToCart product={product} />
                
            </div>
        </div>
    );
};

export default SingleProduct;