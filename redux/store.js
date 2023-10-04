 "use client"
 import { configureStore } from "@reduxjs/toolkit";
 import productReducer from "./featuers/products/productSlice";
 import filterReducer from "./featuers/filter/filterSlice";
 import singleReducer from "./featuers/singleProduct/singleproductSlice";
 import cartReducer from "./featuers/cart/cartSlice";

 const store = configureStore({
    reducer : {
        product : productReducer,
        filter : filterReducer,
        single : singleReducer,
        cart : cartReducer
    },
    
 });

 export default store;