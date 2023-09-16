import React from 'react';

function DetalhesProduto({ produto, adicionarAoCarrinho }) {
  return (
    <div className="detalhes-produto">
      <h2>{produto.nome}</h2>
      <img src={produto.imagem} alt={produto.nome} />
      <p>{produto.descricao}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {produto.ingredientes.map(ingrediente => <li key={ingrediente}>{ingrediente}</li>)}
      </ul>
      <h3>Opções de tamanho:</h3>
      <ul>
        {produto.tamanhos.map(tamanho => <li key={tamanho}>{tamanho}</li>)}
      </ul>
      <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button>
    </div>
  );
}

export default DetalhesProduto;
