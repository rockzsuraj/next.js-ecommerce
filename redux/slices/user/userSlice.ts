// slices/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Define your user-related state and actions here
const userSlice = createSlice({
  name: 'users',
  initialState: null, // or your initial user state
  reducers: {
    // Define user-related actions
  },
});

export default userSlice.reducer;
