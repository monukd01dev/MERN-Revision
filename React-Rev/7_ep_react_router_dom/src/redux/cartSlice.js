import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            
            const item = state.items.find(item => item.id === action.payload.id)
            if(item){
                item.quantity += 1;
                return;
            }
            state.items.push(action.payload);


        },
        removeItem: (state, action) => {
            
            const item = state.items.find(item => item.id === action.payload.id)
            if(item && item.quantity > 1){
                item.quantity -= 1;
                return;
            }
            const indexOfItem = state.items.indexOf(item);
            if(indexOfItem !== -1){
                state.items.splice(indexOfItem,1)
            }

        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;