import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    single_product_loading : false,
    single_product_error : false,
    single_product : {}
}

const singleProductSlice = createSlice({
    name : "singleProduct",
    initialState,
    reducers : {
        getSingleProductBegin : (state) => {
            state.single_product_loading = true;
        },
        getSingleProductSuccess : (state , action) => {
            state.single_product_loading = false;
            state.single_product = action.payload;
        },
        getSingleProductError : (state) => {
            state.single_product_loading = false;
            state.single_product_error = true;
        }
    }
});

export const {
    getSingleProductBegin,
    getSingleProductSuccess,
    getSingleProductError
} = singleProductSlice.actions;

export const fetchSingleProduct = (params) => {
    return async (dispatch) => {
      dispatch(getSingleProductBegin());
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params}`
        );  
        const singleProduct = await response.json();
        dispatch(getSingleProductSuccess(singleProduct));
      } catch (error) {
        dispatch(getSingleProductError());
      }
    };
  };
      
export const selectSingleProduct = (state) =>
  state.singleProduct.single_product;

export default singleProductSlice.reducer;