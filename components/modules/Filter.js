import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Filter.module.css";
import { getUniqueValues } from '../../helper/Function';
import { clearFilter, updateFilters } from '../../redux/featuers/filter/filterSlice';

const Filter = () => {
    const dispatch = useDispatch()

    const {
        filters: { text, category, min_price, price, max_price },
        all_products,
      } = useSelector((state) => state.filter);

    // const {all_products} = useSelector((state) => state.products)

      
    const categories = getUniqueValues(all_products , "category");

    if (all_products.length > 0) {
        return (
            <div className={styles.container}>
            <div className={styles.content}>
                <form className={styles.filter__form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.form__control}>
                        <input 
                            className={styles.search__input}
                            type='text'
                            name='text'
                            placeholder='Search'
                            value={text}
                            onChange={(e) => dispatch(updateFilters(e.target))}
                            />
                    </div>
                    <div className={styles.form__control}>
                        <h3 className={styles.category}>Category</h3>
                        <div className={styles.form__category}>
                            {
                                categories.map((c , index) => (
                                    <button 
                                    key={index}
                                    type='button'
                                    name='category'
                                    onClick={() => 
                                        dispatch(updateFilters({name:"category" , value: c}))
                                        }
                                        className={category === c ? styles.active : null}
                                        data-category = {c}
                                    >
                                        {c}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.form__control}>
                        <h1 className={styles.priceT}>Price</h1>
                        <p className={styles.price}>${price}</p>
                        <input 
                            type='range'
                            name='price'
                            className={styles.input}
                            min={min_price}
                            max={max_price}
                            value={price}
                            onChange={(e) => dispatch(updateFilters({
                                name:"price",
                                value:Number(e.target.value)
                            }))}
                        />
                    </div>
                </form>
                <button className={styles.clear} onClick={() => dispatch(clearFilter())}>
                    Reset Filter
                </button>
            </div>
        </div>
        )
    }

    return (
        <div>
            
        </div>
    )
};

export default Filter;