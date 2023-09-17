import { createSlice } from '@reduxjs/toolkit';

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [],
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      const produtoExistente = state.find(p => p.id === action.payload.id);
      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        state.push({ ...action.payload, quantidade: 1 });
      }
    },
    diminuirQuantidade: (state, action) => {
      const produtoExistente = state.find(p => p.id === action.payload);
      if (produtoExistente) {
        produtoExistente.quantidade -= 1;
        if (produtoExistente.quantidade <= 0) {
          return state.filter(produto => produto.id !== action.payload);
        }
      }
    },
    removerDoCarrinho: (state, action) => {
      return state.filter(produto => produto.id !== action.payload);
    }
  }
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
