"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import SingleProduct from '../../../../components/templates/SingleProduct';

const ProductDetails = () => {
    const router = useRouter();
    // console.log(router)
    return (
        <div style={{marginTop:"200px"}}>
            <SingleProduct />
        </div>
    );
};

export default ProductDetails;