import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
//     return response.data;
// });