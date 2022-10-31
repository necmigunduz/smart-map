import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
};
export const getQuote = createAsyncThunk('quote/getQuote', async () => {
  try {
    const res = await fetch('https://api.quotable.io/random');
    const quote = await res.json();
    return quote;
  } catch (error) {
    console.log(error);
  }
});
const quoteSlice = createSlice({
  name: 'quote',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.quotes = action.payload;
    });
  },
});

export default quoteSlice.reducer;
