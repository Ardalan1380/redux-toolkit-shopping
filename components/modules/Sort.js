import React from 'react';
import styles from "./Sort.module.css";
import { setGridView , setListView ,updateSort } from '../../redux/featuers/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaList, FaThLarge } from 'react-icons/fa';

const Sort = () => {
    
    const dispatch = useDispatch()
    const {
        filtered_products : products , sort 
    } = useSelector((state) => state.filter)
    // console.log(setGridView());
    return (
       <div className={styles.container}>
        <div className={styles.sort__btns}>
            <button onClick={() => dispatch(setGridView())}>
                {/* <Icons.BsListStyled /> */}
                <FaThLarge />
            </button>
            <br />
            <button onClick={() => dispatch(setListView())}>
                <FaList />
            </button>
            <br />
            </div>
            <p className={styles.sort__item}><span>{products.length}</span> Items founded</p>
            <div className={styles.sort__line} />
            <from className={styles.sort__form}>
            <label 
                htmlFor='sort'>
                sort by:
            </label>
                <select 
                    name='sort'
                    value={sort}
                    onChange={(e) => dispatch(updateSort(e.target.value))}
                    >
                    <option value='price-lowest'>price(lowest price)</option>
                    <option value='price-highest'>price(highest price)</option>
                    <option value='name-a'>name(a-z)</option>
                    <option value='name-z'>name(z-a)</option>
                </select>
                    </from>
       
        </div>
    );
};

export default Sort;