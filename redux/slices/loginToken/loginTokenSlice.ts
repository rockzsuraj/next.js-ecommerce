// slices/loginTokenSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Define your login token-related state and actions here
const loginTokenSlice = createSlice({
  name: 'loginTokens',
  initialState: null, // or your initial login token state
  reducers: {
    // Define login token-related actions
  },
});

export default loginTokenSlice.reducer;
