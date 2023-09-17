import { combineReducers } from '@reduxjs/toolkit';
import carrinhoReducer from './carrinhoReducer';
import produtoReducer from './produtosReducer';

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  produtos: produtoReducer,
});

export default rootReducer;
