import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todoSlice";

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
