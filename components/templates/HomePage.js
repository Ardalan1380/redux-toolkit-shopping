import React from 'react';
import Head from '../modules/Head';
import Services from '../modules/Services';
import {services} from "../../utils/constans"
import PopulerProducts from '../modules/PopulerProducts';
import Discount from '../modules/Discount';

const HomePage = () => {
    // console.log(services)
    return (
        <>
        <Head />
        <Services />
        <PopulerProducts />
        <Discount />
        </>
    );
};

export default HomePage;