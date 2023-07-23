const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");


const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: "price-lowest",
    filters: {
        text: "",
        category: "all",
        min_price: 0,
        price: 0,
        max_price: 0,
    },
}


const filterSlice = createSlice({
    name : "filter",
    initialState , 
    reducers : {
        
        loadProducts : (action , state) => {
            let maxPrice = action.payload.map((product) => product.price);
            maxPrice = Math.max(...maxPrice);
            state.all_products = action.payload;
            state.filtered_products = action.payload;
            state.filters.max_price = maxPrice;
            state.filters.price = maxPrice;
        },

        setGridView : (state , action) => {
            state.grid_view = true;
        },

        setListView : (state) => {
            state.grid_view = false;
        },
        updateSort : (state) => {
            state.sort = action.payload;
        },
        sortProducts : (state , action) => {
            const {sort} = state;
            let temProducts;
            temProducts = [state.filtered_products];
            if(sort === "price-lowest") {
                temProducts = temProducts.sort((a , b) => a.price - b.price);
            }
            
            if(sort === "price-highest") {
                temProducts = temProducts.sort((a , b) => b.price - a.price);
            }

            if(sort === "name-a") {
                temProducts = temProducts.sort((a , b) => a.title.localeCompare(b.title));
            }

            if(sort === "name-z") {
                temProducts = temProducts.sort((a , b) => b.title.localeCompare(a.title));
            }
            state.filtered_products = temProducts
        },updateFilters 
             : (state , action) => {
            state.filters[action.payload.name] = action.payload.value;
        },
        filterProducts : (state) => {
            let temProducts;
            const {text , category , price} = state.filters;
            temProducts = [state.all_products];
            if(text) {
                temProducts = temProducts.filter(
                    (product) => product.title.toLoweCase().include(text)
                );
            }

            if(category !== "all") {
                temProducts = temProducts.filter(
                    (product) => product.category === category
                );
            }

            temProducts =temProducts.filter((product) => product.price <= price);
            state.filtered_products = temProducts;
        },
        clearFilter : (state , action) => {
            state.filters.text = "";
            state.filters.category = "all";
            state.filters.price = filters.max_price;
        },
    }
}) 

export default filterSlice.reducer;
export const {setGridView ,loadProducts,updateFilters, updateSort, clearFilter, sortProducts , filterProducts ,setListView} = filterSlice.actions