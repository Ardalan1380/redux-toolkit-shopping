import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    total_price : 0,
    total_items : 0,
    isCheckout : false,
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        addToCart : (state , action) => {
            const {product , amount : amountToAdd } = action.payload;
            // console.log(amount)
            const tempItem = state.cart.find((item) => item.id === product.id);
            if(tempItem) {
                tempItem.amount += amountToAdd;
                // state.cart[tempItem].amount += amount;
            }else {
                const {id , image, title , price } = product;
                // console.log(amount)
                state.cart.push({id , image, title , price , amount:amountToAdd });
                state.isCheckout = false;
            }
        },
        toggelAmount : (state ,action) => {
            const {id , value} = action.payload;
            const tempItem = state.cart.find((item) => item.id === id)
            if(value === "inc") {
                let newAmount = tempItem.amount + 1;
                tempItem.amount = newAmount;
            }
            if(value === "dec") {
                let newAmount = tempItem.amount - 1;
                if(newAmount < 1) {
                    newAmount  = 1
                }
                tempItem.amount = newAmount;
            }
        },
        removeItem : (state , action) => {
            const index  = state.cart.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.cart.splice(index , 1);
            }
        },

        clearCart : (state) => {
            state.cart = []
        },

        countCartTotals: (state) => {
            const { cart } = state;
            const { total_items, total_price } = cart.reduce(
              (total, cart) => {
                const { amount, price } = cart;
                console.log(amount)
                total.total_items += amount;
                total.total_price += price * amount;
                return total;
              },
              {
                total_price: 0,
                total_items: 0,
              }
            );
      
            state.total_items = total_items;
            state.total_price = total_price;
          },
        
        checkOut : (state) => {
            state.cart = [];
            state.total_items = 0;
            state.total_price = 0;
            state.isCheckout = true;
        }
    }
});

export default cartSlice.reducer;
export const {addToCart , toggelAmount, removeItem , clearCart , checkOut, countCartTotals} = cartSlice.actions;




// const initialState = {
//     selectedItems : [],
//     itemsCounter : 0,
//     total: 0,
//     checkOut : false
// }

// const cartSlice = createSlice({
//     name : "cart",
//     initialState,
//     reducers : {
//         addItem : (state , action) => {
//             const {id} = action.payload;
//             const existingItem = state.selectedItems.find((item) => item.id === id);

//             if (!existingItem) {
//               state.selectedItems.push({
//                 ...action.payload,
//                 quantity: 1,
//               });
//             }
      
//             state.selectedItems = [...state.selectedItems];
//             const { itemsCounter, total } = sumItems(state.selectedItems);
//             state.itemsCounter = itemsCounter;
//             state.total = total;
//             state.checkOut = false;
//         },
//         removeItem: (state, action) => {
//             const newSelectedItems = state.selectedItems.filter(
//               (item) => item.id !== action.payload.id
//             );
      
//             state.selectedItems = [...newSelectedItems];
//             const { itemsCounter, total } = sumItems(newSelectedItems);
//             state.itemsCounter = itemsCounter;
//             state.total = total;
//           },
//           increase: (state, action) => {
//             const index = state.selectedItems.findIndex(
//               (item) => item.id === action.payload.id
//             );
//             state.selectedItems[index].quantity++;
//             const { itemsCounter, total } = sumItems(state.selectedItems);
//             state.itemsCounter = itemsCounter;
//             state.total = total;
//           },
//           decrease: (state, action) => {
//             const index = state.selectedItems.findIndex(
//               (item) => item.id === action.payload.id
//             );
//             state.selectedItems[index].quantity--;
//             const { itemsCounter, total } = sumItems(state.selectedItems);
//             state.itemsCounter = itemsCounter;
//             state.total = total;
//           },
//           checkout: (state) => {
//             state.selectedItems = [];
//             state.itemsCounter = 0;
//             state.total = 0;
//             state.checkOut = true;
//           },
//           clear: (state) => {
//             state.selectedItems = [];
//             state.itemsCounter = 0;
//             state.total = 0;
//             state.checkOut = false;
//           },
//     }
// })

// const sumItems = (items) => {
//     const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
//     const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
//     return { itemsCounter, total };
//   };
  
//   export const {
//     addItem,
//     removeItem,
//     increase,
//     decrease,
//     checkout,
//     clear,
//   } = cartSlice.actions;
  
//   export default cartSlice.reducer;