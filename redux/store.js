 "use client"
 import { configureStore } from "@reduxjs/toolkit";
 import productReducer from "./featuers/products/productSlice";
 import filterReducer from "./featuers/filter/filterSlice";
 import logger from "redux-logger";

 const store = configureStore({
    reducer : {
        product : productReducer,
        filter : filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    
 });

 export default store;