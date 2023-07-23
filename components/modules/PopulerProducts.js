'use client'

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/featuers/products/productSlice';
import HomeProducts from './HomeProducts';

import styles from "./PopulerProducts.module.css"
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const PopulerProducts = () => {
    const dispatch = useDispatch()
    const productState = useSelector((state) => state.product)
    // const products = productState.slice(0 , 3)
    const {products} = productState;
    const rate = products.filter((product) => product.rating.rate >= 4.5)
    const productSlice = rate.slice(0,3)
    console.log(productSlice)

    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    return (
        <div>
            <div className={styles.text}>
            <h1>Most Populer Products</h1>
            </div>

        <div className={styles.container}>
            {productState.loading ? <Loader /> : null}
            {productState.error ? <Error /> : null}
            {
                productSlice.map((product) => (
                    <HomeProducts key={product.id} data={...product} />
                    ))
                }
            
        </div>
    </div>
    );
};

export default PopulerProducts;