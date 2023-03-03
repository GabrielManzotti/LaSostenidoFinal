import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/Counter"
import addShopCartReducer from "../features/AddShoppCart"



export const store = configureStore({
  reducer: {
   counter: counterReducer,
   addShopCart: addShopCartReducer,
  },
})