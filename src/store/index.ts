import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({
  cart: cartReducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
