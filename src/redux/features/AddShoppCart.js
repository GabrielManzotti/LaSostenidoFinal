import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value: []
}

export const addShopCartSlice = createSlice(
    {

        name: "shop",
        initialState,
        reducers: {
            addShopCart: (state, action) => {
                state.value.push (action.payload)
            },
        }
    }
)

export const { addShopCart } = addShopCartSlice.actions;

export default addShopCartSlice.reducer;