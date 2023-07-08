import { auth } from "@clerk/nextjs";
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    ordersPlaced: 0,
  },
  reducers: {
    addProductToCart: (state) => {
      state.ordersPlaced = state.ordersPlaced + 1;
    },
    removeProductFromCart: (state) => {
      state.ordersPlaced = state.ordersPlaced - 1;
    },

    setProducts: (state, action) => {
      state.ordersPlaced = action.payload;
    },
  },
});

export const { removeProductFromCart, addProductToCart, setProducts } =
  cartSlice.actions;
export const CartReducer = cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart;
