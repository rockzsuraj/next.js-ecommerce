// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '../redux/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
export default store;
