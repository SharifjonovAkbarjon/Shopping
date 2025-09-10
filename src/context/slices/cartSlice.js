import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [], 
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exist = state.items.find(item => item.id === action.payload.id);
            if (!exist) state.items.push({...action.payload, quantity: 1});
        },
        removeCart:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }

})

export const { addToCart, removeCart, clearCart } =cartSlice.actions;
export default cartSlice.reducer;