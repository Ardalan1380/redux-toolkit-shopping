import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/featuers/products/productSlice';
import { filterProducts , sortProducts , loadProducts} from '../../redux/featuers/filter/filterSlice';
import Error from '../shared/Error';
import Loader from '../shared/Loader';
import List from './List';
import GridProduct from './Grid';
import Grid from './Grid';
import styles from "./Products.module.css";

const Products = () => {
        const dispatch = useDispatch();
        const {products , loading , error} = useSelector(state => state.product);
        const {sort , filters , grid_view , filtered_products} = useSelector(state => state.filter);
        useEffect(() => {
            dispatch(fetchProducts())
        } , [])
        
    
    
        useEffect(() => {
            dispatch(loadProducts(products))
        } , [products]);
        // console.log(loadProducts(products))
    
        useEffect(() => {
            dispatch(filterProducts());
            dispatch(sortProducts());
        },[filters , sort]);
        
        if(loading) {
          return  <Loader />
        }
        if(error) {
            return <Error />
        }
    
        // console.log(filtered_products)
    
        if(filtered_products.length < 1) {
            return (
                // <h2 style={{fontSize:"1.3rem" , color:"red" , textAlign:"center"}}>No product founded</h2>
                <h1 className={styles.empty}>No product founded</h1>
            )
        }
    
        if(grid_view === false) {
            return <List products={filtered_products} />
        }
        
        return <Grid products={filtered_products} />
    

};

export default Products;