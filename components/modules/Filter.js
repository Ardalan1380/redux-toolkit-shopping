import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Filter.module.css";
import { getUniqueValues } from '../../helper/Function';
import { clearFilter, updateFilters } from '../../redux/featuers/filter/filterSlice';

const Filter = () => {
    const dispatch = useDispatch()

    const {
        filters : {text , category , min_price , max_price , price} , all_products
    } = useSelector((state) => state.filter);
    console.log(all_products)
    console.log("filter")
    const categories = getUniqueValues(all_products , "category")
    
    if(all_products.length > 0) {
        return (
            <div className={styles.container}>
                <form className={styles.filter_form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.form__control}>
                        <input
                            type='text'
                            name='text'
                            value={text}
                            placeholder='Search...'
                            onChange={(e) => dispatch(updateFilters(e))}
                            className={styles.search__input}
                         />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Catefories</h3>
                        <div className={styles.form__categories}>
                            {
                                categories.map((c , index) => (
                                    <button 
                                        key={index}
                                        type='button'
                                        name='category'
                                        className={category === c ? "active" : null}
                                        onClick={(e) => dispatch(updateFilters(e))}
                                        data-category = {c}
                                    >
                                        {c}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.form__control}>
                            <h4>Price</h4>
                            <p className={styles.price}>${price}</p>
                            <input 
                                type='range'
                                name='price'
                                min={min_price}
                                max={max_price}
                                value={price}
                                onChange={(e) => dispatch(updateFilters(e))}
                            />
                    </div>
                </form>
                <button 
                    className={styles.clear}
                    onClick={() => dispatch(clearFilter())}
                >
                        Reset Filters
                </button>
            </div>
        );

    }
    return <div></div>
};

export default Filter;