import { combineReducers } from 'redux';

import productsReducer from './Products';
import cartReducer from './Cart';
import toastReducer from './Toast';


export default combineReducers({
  productsReducer,
  cartReducer,
  toastReducer
});