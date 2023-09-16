const initialState = [];

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      return [...state, action.payload];
    case 'REMOVER_DO_CARRINHO':
      return state.filter(produto => produto.id !== action.payload);
    default:
      return state;
  }
};

export default carrinhoReducer;
