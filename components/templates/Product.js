"use client"

import React , {useEffect} from 'react';
import styles from "./Product.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/featuers/products/productSlice';
import { useState } from 'react';
import { setGridView } from '../../redux/featuers/filter/filterSlice';
import Grid from '../modules/Grid';
import List from '../modules/List';
import Filter from '../modules/Filter';
import Sort from '../modules/Sort';
import Products from '../modules/Products';

const Product = () => {
    // const dispatch = useDispatch();
    // const [order , setOrder] = useState('')
    // const productState = useSelector((state) => state.product);
    // console.log(productState.product)
    // const [sortOrder , setSortOrder] = useState ('')
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // } , []);
    // const {products} = useSelector((state) => state.product);
    // const {grid_view} = useSelector((state) => state.filterState)
    // const dispatch = useDispatch();

    return (
      <main>
      <div className={styles.container}>
          <Filter />
          <div>
            <Sort />
            <Products />
          </div>
      </div>
      </main>
    )

    // const { category, maxPrice, rating, sortOrder } = useSelector((state) => state.filter);
    // const {}
    // const {products} = productState;
    // console.log(products)
    // useEffect(() => {
    //     dispatch(fetchProducts())
    // },[]);

    
//   const filteredProducts = products.filter((product) => {
//     let isMatch = true;

//     if (category && category !== product.category) {
//       isMatch = false;
//     }

//     if (maxPrice && maxPrice < product.price) {
//       isMatch = false;
//     }

//     if (rating && rating !== product.rating) {
//       isMatch = false;
//     }

//     return isMatch;
//   }).sort((a, b) => {
//     if (sortOrder === 'A-Z') {
//       return a.name.localeCompare(b.name);
//     } else if (sortOrder === 'Z-A') {
//       return b.name.localeCompare(a.name);
//     } else {
//       return 0;
//     }
//   });

    // if(grid_view === false) {
    //   return 
    // }

    // return <Grid data={products} />
    // ( 
        // <div className={styles.container}>
        //     <button>Grid</button><br />
        //     <button>List</button>
        //     {
        //         products.loading ? <h3>Loading....</h3> : null
        //     }
        //     if


            {/* ////////////////////////////////////////////////////// */}
             {/* <select value={sortOrder} onChange={(event) => dispatch(event.target.value)}>
        <option value="">Sort by name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select> */}

      {/* <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} 
            - {product.category} - {product.price} - {product.rating}
          </li>
        ))}
      </ul> */}
        // </div>
    // );
};

export default Product;