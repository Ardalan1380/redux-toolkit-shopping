"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart, countCartTotals } from '../../redux/featuers/cart/cartSlice';
import CartItem from '../modules/CartItem';
import Link from 'next/link';
import uniqid from "uniqid"

//style
import styles from "./CartPage.module.css"
import CartTotal from '../modules/CartTotal';
import Empty from '../modules/Empty';

const CartPage = () => {
    const dispatch = useDispatch();
    const {cart , isCheckout } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(countCartTotals(cart))
    } , [cart , isCheckout]);
    console.log(cart)

    // console.log(dispatch(countCartTotals(cart , amount)))
    
    
    
    if(cart.length < 1) {
        return <Empty />
    }
    return (
        <main>
        <div className={styles.container}>
            <div className={styles.cart__content}>   
              <div className={styles.cart__item}>
                {
                    cart.map((item) => {
                            return <CartItem key={uniqid()} {...item} />;
                    })
                }
            </div>
            <div className={styles.cart__link}>
                    <button className={styles.buy}>
                        <Link href="/products">Buy more</Link>
                    </button>
                    <button className={styles.clear} onClick={() => dispatch(clearCart())}>
                        Clear All
                    </button>
            </div>
        </div>
        <div className={styles.total}>
              <CartTotal />
        </div>
     </div>
     </main>
    );
};

export default CartPage;