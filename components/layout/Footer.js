import React from 'react';
import styles from "./Footer.module.css"
import Link from 'next/link';
import Image from 'next/image';

//icons 
import instagram from "../../public/img/instagram.svg"
import telegram from "../../public/img/telegram.svg"
import whatsapp from "../../public/img/whatsapp.svg"


const Footer = () => {
    return (
        

        <div className={styles.container}>
            <div className={styles.media}>
                    <h3>(+98)9034710891</h3>
                    <Link href="mailto:ardalanh.b8099@gmail.com" target='_blank'>
                    <p>support@gmail.com</p>
                    </Link>
                    <ul>
                        <li>
                            <Link href="https://www.instagram.com/ardalan.barzanji/">
                                <Image src={instagram} width={100} height={100} alt='instagram' />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.t.me/Ardalan_barzanji'>
                                <Image src={telegram} width={100} height={100} alt='telegram' />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://wa.me/+989034710891'>
                                <Image src={whatsapp} width={100} height={100} alt='whatsapp' />
                            </Link>
                        </li>
                    </ul>
            </div>
            <div className={styles.second}>
                <h2>Terms Of Use</h2>
                <p>Privacy Policy</p>
                <p>Our Community</p>
                <p>Guidlines</p>
            </div>
            <div className={styles.third}>
                <h2>Account Mnage</h2>
                <p>Login</p>
                <p>Cart Shopping</p>
                <p>Track My Order</p>
            </div>
            
            <div className={styles.last}>
            <label>Any suggestion ?</label>
            <input type='text' placeholder='any Idea...'/>
            <br />
            <button>Send Message</button>
            </div>
           
        </div>
    

    );
};

export default Footer;