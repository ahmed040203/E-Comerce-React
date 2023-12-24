import { configureStore } from "@reduxjs/toolkit";
import productsClice from "./slices/products-clice";
import cartSlice from "./slices/cart-slice";
import categoriesSlice from "./slices/categories-slice";

export const store = configureStore({
  reducer: {
    products: productsClice,
    cart: cartSlice,
    categories: categoriesSlice,
  },
});
