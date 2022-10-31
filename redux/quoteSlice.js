import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  isLoading: false,
};
export const getQuotes = createAsyncThunk('quotes/getQuotes', async () => {
  try {
    const res = await fetch('https://api.quotable.io/quotes');
    const quotes = await res.json();
    return quotes.results;
  } catch (error) {
    console.log(error);
  }
});
const quoteSlice = createSlice({
  name: 'quotes',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getQuotes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.quotes = action.payload;
      })
      .addCase(getQuotes.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default quoteSlice.reducer;
