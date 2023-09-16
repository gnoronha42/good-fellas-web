import React from 'react';
import CardProduto from '../CardProduto';

function TelaMenu({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="tela-menu">
      <header>
        <img src="URL_DA_IMAGEM_DO_HEADER" alt="Header" />
      </header>
      <div className="lista-produtos">
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </div>
  );
}

export default TelaMenu;
