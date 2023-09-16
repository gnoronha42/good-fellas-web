import React from 'react';
import { useSelector } from 'react-redux';

function Carrinho() {
  const produtosNoCarrinho = useSelector(state => state.carrinho);

  const calcularTotal = () => {
    return produtosNoCarrinho.reduce((acc, produto) => acc + produto.preco, 0);
  };

  return (
    <div className="carrinho">
      <h2>Carrinho</h2>

      {produtosNoCarrinho.map(produto => (
        <div key={produto.id} className="produto-carrinho">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>Preço: {produto.preco}</p>
        </div>
      ))}

      <div className="total">
        <strong>Total: {calcularTotal()}</strong>
      </div>

      <button onClick={() => {/* Aqui pode colocar a função de checkout */}}>Finalizar Compra</button>
    </div>
  );
}

export default Carrinho;
