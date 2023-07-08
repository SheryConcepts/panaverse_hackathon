import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    quantity: 0,
  },
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    incrementQuantity: (state) => {
      state.quantity = state.quantity + 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity === 0) {
        state.quantity = 0;
      } else {
        state.quantity = state.quantity - 1;
      }
    },
  },
});

export const { setQuantity, incrementQuantity, decrementQuantity } =
  orderSlice.actions;
export const OrderReducer = orderSlice.reducer;
export const orderSelector = (state: RootState) => state.order;
