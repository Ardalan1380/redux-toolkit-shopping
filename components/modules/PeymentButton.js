import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const PeymentButton = ({amount , increase, decrease}) => {
    // console.log(amount)
    // console.log(increase);
    return (
        <div>
              <button 
                type='button'
                // className={amount < 2 && styles.opacity}
                onClick={decrease}
                >
                  <FaMinus style={{color:"red"}} />
            </button>
            <span>{amount}</span>
            <button 
                type='button'
                // className={styles.inc}
                onClick={increase}
            >
                <FaPlus style={{color:"green"}} />
            </button>
        </div>
    );
};

export default PeymentButton;