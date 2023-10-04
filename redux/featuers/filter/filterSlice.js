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
        
        loadProducts: (state, action) => {

            let maxPrice = action.payload.map((product) => product.price);
            maxPrice = Math.max(...maxPrice);
      
            state.all_products = action.payload;
            state.filtered_products = action.payload;
            state.filters.max_price = maxPrice;
            state.filters.price = maxPrice;
          },
          setGridView: (state) => {
            state.grid_view = true;
          },
          setListView: (state) => {
            state.grid_view = false;
          },
          updateSort: (state, action) => {
            state.sort = action.payload;
          },
          sortProducts: (state) => {
            const { sort } = state;
            let tempProducts = [...state.filtered_products];
            if (sort === "price-lowest") {
              tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            }
            if (sort === "price-highest") {
              tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }
            if (sort === "name-a") {
              tempProducts = tempProducts.sort((a, b) =>
                a.title.localeCompare(b.title)
              );
            }
            if (sort === "name-z") {
              tempProducts = tempProducts.sort((a, b) =>
                b.title.localeCompare(a.title)
              );
            }
            state.filtered_products = tempProducts;
          },
          updateFilters: (state, action) => {
            const {name , value} = action.payload;
            if (name === "category") {
              state.filters.category = value;
            }else if (name === "price") {
              state.filters.price = Number(value)
            }else {
              state.filters[name] = value;
            }
          },
          filterProducts: (state) => {
            const { text, category, price } = state.filters;
            let tempProducts = [...state.all_products];
            if (text) {
              tempProducts = tempProducts.filter((product) =>
                product.title.toLowerCase().includes(text)
              );
            }
    
            if (category !== "all") {
              tempProducts = tempProducts.filter(
                (product) => product.category === category
              );
            }
            
            tempProducts = tempProducts.filter((product) => product.price <= price);
            state.filtered_products = tempProducts;
          },
    
          clearFilter: (state) => {
            state.filters.text = "";
            state.filters.category = "all";
            state.filters.price = state.filters.max_price;
          },
    
    }
}) 

export default filterSlice.reducer;
export const {setGridView ,loadProducts,updateFilters, updateSort, clearFilter, sortProducts , filterProducts ,setListView} = filterSlice.actions;