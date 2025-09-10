import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/createApi";
import authReducer from '../context/auth/authSlice'

export const store = configureStore({ 
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

