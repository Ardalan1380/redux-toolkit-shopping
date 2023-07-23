import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading : false,
    products : [],
    popular_products: [],
    error : false
};

const fetchProducts = createAsyncThunk("products/fetchProducts" , () => {
    return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => data)
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled , (state , action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = false;
        });
        builder.addCase(fetchProducts.rejected , (state , action) => {
            state.loading = false;
            state.products = [];
            state.error =  action.error.message
        })
    }
})

export default productSlice.reducer;
export {fetchProducts}