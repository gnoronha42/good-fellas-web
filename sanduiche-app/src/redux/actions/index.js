export const adicionarAoCarrinho = (produto) => ({
  type: 'ADICIONAR_AO_CARRINHO',
  payload: produto,
});

export const removerDoCarrinho = (produtoId) => ({
  type: 'REMOVER_DO_CARRINHO',
  payload: produtoId,
});


export const diminuirQuantidade = (produtoId) => ({
  type: 'DIMINUIR_QUANTIDADE',
  payload: produtoId,
});
