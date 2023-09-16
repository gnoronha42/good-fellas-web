import React from 'react';

function CardProduto({ produto, adicionarAoCarrinho }) {
  return (
    <div className="card-produto">
      <h2>{produto.nome}</h2>
      <img src={produto.imagem} alt={produto.nome} />
      <button onClick={() => adicionarAoCarrinho(produto)}>+</button>
    </div>
  );
}

export default CardProduto;
