import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import styles from "./Stars.module.css"

const Stars = ({ stars = { rate: "" } }) => {
    const {rate} = stars
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
          <span key={index}>
            {rate >= index + 1 ? (
              <BsStarFill />
            ) : rate >= number ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        );
      });
      
    // console.log(rate)
    return (
        <div className={styles.container}>
            {
                tempStars
            }
        </div>
    );
};

export default Stars;