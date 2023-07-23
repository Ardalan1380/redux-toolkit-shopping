import React from 'react';
import styles from "./Sort.module.css";
import { setGridView , setListView ,updateSort } from '../../redux/featuers/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sort = () => {

    const {filtered_products : products , grid_view , sort} = useSelector(
        (state) => state.filter
    )
    const dispatch = useDispatch();


    return (
        <>
        <div className={styles.sort__btns}>
            <button 
                type='button'
                onClick={() => dispatch(setGridView())}
                className={grid_view ? "active" : null}
                >
                Grid
            </button>
            <button 
                type='button'
                onClick={() => dispatch(setListView())}
                className={!grid_view ? "active" : null}
                >
                List
            </button>
            <p>
                <span>{products.length}</span> item found
            </p>
            <form>
                <label htmlFor='sort'>sort by :</label>
                <select 
                    name='sort'
                    id='sort'
                    className={styles.sort_input}
                    value={sort}
                    onChange={(e) => dispatch(updateSort(e))}
                >
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </form>
        </div>
        </>
    );
};

export default Sort;