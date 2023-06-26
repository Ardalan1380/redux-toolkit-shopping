 "use client"
 import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featuers/counter/counterSlice"
 import logger from "redux-logger";
 import usersReducer  from "./featuers/users/usersSlice"

 const store = configureStore({
    reducer : {
        counter: counterReducer,
        users : usersReducer
    },
    
 });

 export default store;