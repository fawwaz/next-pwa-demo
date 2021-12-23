import { configureStore } from "@reduxjs/toolkit";
import TodoAPI from "./api";

export const store = configureStore({
  reducer: {
    [TodoAPI.reducerPath]: TodoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([TodoAPI.middleware]),
});
