'use client'
import Image from 'next/image';
import React, { useState } from 'react';;
import home from "../../public/img/home.svg";
import cart from "../../public/img/cart.svg";
import payment from "../../public/img/payment.svg";
import styles from "./Navbar.module.css";
import Link from 'next/link';
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../../public/img/logo.png";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {total_items} = useSelector((state) => state.cart)
    const [ham , setHam] = useState(true);
    const navbar = !ham ? `${styles["open"]} ${styles.lists}` : styles.lists
    console.log(total_items)
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={200} height={200} />
            </div>
            
            <h3 className={styles.name}><Link href="/">Stuff Shop</Link></h3>
            <div className={navbar}>
                <div className={styles.mobile} onClick={() => setHam(!ham)}>
                        {
                            ham ? <FaBars /> : <FaTimes /> 
                        } 
                </div>
                <ul>
                    <li>
                <Link href="/"><Image src={home} width={200} height={200} alt='home' /></Link>
                    </li>
                    <li>
                <Link href="/products">
                    <Image src={cart} width={200} height={200} alt='shop' />
                </Link>
                    </li>
                    <li>
                        <div className={styles.amount}>
                <Link href="/payment">
                    <Image src={payment} width={200} height={200} />
                    {
                        total_items > 0 && <span className={styles.wave}>{total_items}</span>
                    }
                    <span>{total_items}</span>
                    
                </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;