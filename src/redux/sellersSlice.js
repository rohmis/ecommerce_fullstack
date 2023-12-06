// sellersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSellers = createAsyncThunk(
  'sellers/fetchSellers',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/blog/sellers/');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching sellers'); // Throw an instance of Error
    }
  }
);

const sellersSlice = createSlice({
  name: 'sellers',
  initialState: {
    sellers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // You can add extra reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sellers = action.payload;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default sellersSlice.reducer;
