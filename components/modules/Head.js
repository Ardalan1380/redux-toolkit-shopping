import React from 'react';

//styles
import style from "./Head.module.css"
import Image from 'next/image';

//img
import shop from "../../public/img/shop1.jpg"
import Link from 'next/link';

const Head = () => {
    return (
        <main className={style.main}>
            <section className={style.Wrapper}>
        <span className={style.hHLowOpacityCover}>
          <span></span>
        </span>
        <div className={style.flex}>
            <div className={style.text}>
          <h1>Wellcome to Stuff Shop</h1>
          <h3>
           All you need you can buy here
          </h3>
            <Link href="/products">
          <button>Lets shop...</button>
            </Link>
            </div>
          
          
        <div className={style.img}>
        <Image src={shop} width={600} height={600} alt="online shop" />
        </div>
        </div>
      </section>

        </main>
    );
};

export default Head;    