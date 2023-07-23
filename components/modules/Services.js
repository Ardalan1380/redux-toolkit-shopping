'use client'


import React from 'react';
import { services } from '../../utils/constans';

import styles from "./Services.module.css";

const Services = () => {
  // console.log(services)
  return (
    <div className={styles.first}>
        {
          services.map(({name , id , icon, text}) => (
            <div key={id} className={styles.container}>
              <div className={styles.main}>
                  <div className={styles.icon}>{icon}</div>
                  <h2>{name}</h2>
               <div className={styles.text}>
              {text}
            </div>
           </div>
            </div>
          ))
        }
    </div>
  );
};

export default Services;