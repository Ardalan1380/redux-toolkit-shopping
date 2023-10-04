import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./CartTotal.module.css";
import Link from 'next/link';
import { checkOut } from '../../redux/featuers/cart/cartSlice';

const CartTotal = () => {
    const dispatch = useDispatch()
    const {total_price , total_items} = useSelector(state => state.cart)
    return (
        <div className={styles.container}>
            <h2 className={styles.item}>
                Total Item : <span>{total_items}</span>
            </h2>
            <h2 className={styles.price}>Total Price : <span>${total_price.toFixed(2)}</span></h2>
            <hr />
            <Link onClick={() => dispatch(checkOut())} className={styles.check} href="/checkOut">CheckOut</Link>
        </div>
    );
};

export default CartTotal;