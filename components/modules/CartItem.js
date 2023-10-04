"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, toggelAmount } from '../../redux/featuers/cart/cartSlice';
import Link from 'next/link';
import styles from "./CartItem.module.css";
import { truncate } from '../../utils/helper';
import AmountButton from './AmountButton';
import PeymentButton from './PeymentButton';
import { BsTrash } from 'react-icons/bs';
// import {GrFormTrash} from "react-icons/fa"



const CartItem = ({id , image , price, amount, title}) => {
    console.log(price)
    const dispatch = useDispatch();
    console.log(price)
    const increase = () => {
        console.log(dispatch(toggelAmount({id: id, value: "inc"})));
    }
    const decrease = () => {
        dispatch(toggelAmount({id:id ,value: "dec"}))
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image}  alt={title} />
            </div>  
                <div className={styles.item__info}>
                    <Link href={`/products/${id}`}>
                        {truncate(title , 15)}
                    </Link>
                    <p>${price} &#9747; {amount}</p> 
                    <span>${(price * amount).toFixed(1)}</span>
                </div>
                <AmountButton increase={increase} decrease={decrease} amount={amount} />
                <button className={styles.trash} onClick={() => dispatch(removeItem(id))}>
                    <BsTrash  />
                </button>
        </div>
    );
};

export default CartItem;