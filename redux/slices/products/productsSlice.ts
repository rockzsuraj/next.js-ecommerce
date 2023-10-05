import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Products } from '../../../types/products';

interface ProductsState {
  products: Products | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Products, string>(
  'products/fetchProducts',
  async (id) => {
    const response = await axios.get<Products>(`https://api.escuelajs.co/api/v1/products/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default productSlice.reducer;
