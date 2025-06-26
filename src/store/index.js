import { configureStore } from '@reduxjs/toolkit';
import hcpReducer from './slices/hcpSlice';
import hcpProfileDetailsSlice  from './slices/hcpProfileDetailsSlice';
export const store = configureStore({
  reducer: {
    hcp: hcpReducer,
    hcpProfileDetails: hcpProfileDetailsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});