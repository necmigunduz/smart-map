import {configureStore} from '@reduxjs/toolkit';
import quoteSlice from './quoteSlice';
export const store = configureStore({
  reducer: {
    quotes: quoteSlice,
  },
});
