// slices/index.ts
import { combineReducers } from 'redux';
import cartReducer from '../redux/slices/cart/cartSlice';
import productReducer from '../redux/slices/products/productsSlice';
import userReducer from '../redux/slices/user/userSlice';
import loginTokenReducer from '../redux/slices/loginToken/loginTokenSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  users: userReducer,
  loginTokens: loginTokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
