import { configureStore } from '@reduxjs/toolkit';

import carrinhoReducer from './reducers/carrinhoReducer';
import produtosReducer from './reducers/produtosReducer';

const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho:carrinhoReducer
  }
});

export default store;
