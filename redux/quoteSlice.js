import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  quote: [],
  keyword: '',
};
export const getQuote = createAsyncThunk('quote/getQuote', async keyword => {
  try {
    const res = await fetch(`https://api.quotable.io/random?tags=${keyword}`);
    const quote = await res.json();
    return quote;
  } catch (error) {
    console.log(error);
  }
});
const quoteSlice = createSlice({
  name: 'quote',
  initialState: initialState,
  reducers: {
    setKey: (state, action) => {
      // console.log(state, action);
      state.keyword = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.quote = action.payload;
    });
  },
});
export const {setKey} = quoteSlice.actions;
export default quoteSlice.reducer;
