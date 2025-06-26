import { configureStore } from '@reduxjs/toolkit';
import hcpReducer from './slices/hcpSlice';

export const store = configureStore({
  reducer: {
    hcp: hcpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});