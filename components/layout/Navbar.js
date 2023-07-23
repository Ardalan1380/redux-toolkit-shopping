'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import home from "../../public/img/home.svg"
import cart from "../../public/img/cart.svg"
import payment from "../../public/img/payment.svg"
import styles from "./Navbar.module.css"
import Link from 'next/link';
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../../public/img/logo.png"
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../redux/featuers/sidebar/sidebarSlice';

const Navbar = () => {
    const [ham , setHam] = useState(false);
    const dispatch = useDispatch()
    const navbar = !ham ? `${styles["open"]} ${styles.lists}` : styles.lists
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
                <Link href="/payment">
                    <Image src={payment} width={200} height={200} />
                </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;


