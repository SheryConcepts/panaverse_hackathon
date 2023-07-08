import  {configureStore}   from "@reduxjs/toolkit";
import { CartReducer } from "./cartSlice";
import {  OrderReducer } from "./orderSlice";

export const store = configureStore({
  reducer: {cart: CartReducer, order: OrderReducer}
  
})

export type RootState = ReturnType<typeof store.getState>


