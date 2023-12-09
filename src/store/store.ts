import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";
import FilterReducer from "./slices/FilterSlice";
import SneakerReducer from "./slices/SneakerSlice";
import cartReducer from "./slices/CartSlice";

const rootReducer = combineReducers({
  CartReducer,
  FilterReducer,
  SneakerReducer,
  cartReducer
})

export const store = configureStore({
  reducer: rootReducer,
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
