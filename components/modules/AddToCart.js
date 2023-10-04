"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/featuers/cart/cartSlice';
import AmountButton from './AmountButton';
import styles from "./AddToCart.module.css"

const AddtoCart = ({product}) => {
    // console.log(product)
    const dispatch = useDispatch();
    const [amount , setAmount] = useState(1);
    
    const increase = () => {
        setAmount((oldAmount) => oldAmount + 1);
    };
    const decrease = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount - 1;
            if (newAmount < 1) {
                newAmount = 1;
            }
            return newAmount;
        });
    };
    // console.log(dispatch(addToCart({product , amount})))
    return (
        <div>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
                <Link href="/payment" onClick={() => dispatch(addToCart({product , amount}))}>
            <p className={styles.btn}>
                    Payments
            </p>    
                </Link>

        </div>
    );
};

export default AddtoCart;