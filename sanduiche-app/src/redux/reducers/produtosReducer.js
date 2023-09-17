import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    produtos: [
        { id: '1', nome: 'x-bacon', imagem: 'https://anamariabraga.globo.com/wp-content/uploads/2016/11/x-salada-classico.jpg', descricao: 'Delicioso sanduíche com bacon.', preco: 10 },
        { id: '2', nome: 'x-salada', imagem: 'https://embutidosbonatti.ind.br/temp/xxx-57-1920x1080m1.jpg', descricao: 'Refrescante sanduíche com salada.', preco: 8 },
        { id: '3', nome: 'x-tudo', imagem: 'https://static.itdg.com.br/images/1200-675/7624c9c7c7e608f0f54330eeead72812/239570-original.jpg', descricao: 'Sanduíche completo para os famintos.', preco: 12 }
      ]
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    // Aqui você pode adicionar outros reducers, como adicionarProduto, removerProduto, etc.
  }
});

export default produtosSlice.reducer;
