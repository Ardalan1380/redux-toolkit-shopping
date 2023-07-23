import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/featuers/products/productSlice';
import { filterProducts , sortProducts , loadProducts} from '../../redux/featuers/filter/filterSlice';
import Error from '../shared/Error';
import Loader from '../shared/Loader';
import List from './List';
import GridProduct from './GridProduct';

const Products = () => {

    const dispatch = useDispatch();
    
    const {loading:loading, error : error, products} = useSelector((state) => state.product);

    // console.log(products)   

    const {filtered_products , grid_view , sort , filters} = useSelector((state) => state.filter);
    // const {}
    
    useEffect(() => {
        dispatch(fetchProducts());
    } , []);

    useEffect(() => {
        dispatch(filterProducts());
        dispatch(sortProducts());
    },[])

    

    if(error) {
        return <Error />
    }

    if(loading) {
        return <Loader />
    }

    // if(filtered_products.length < 1) {
    //     return (
    //         <h2>Sorry, no products matched your search ...</h2>
    //     )
    // }

    if(grid_view === false) {
        return <List products={filtered_products} />
    }
    return <GridProduct products={filtered_products} />

};

export default Products;