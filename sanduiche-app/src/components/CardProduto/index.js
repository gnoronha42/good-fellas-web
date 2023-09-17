import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarAoCarrinho, diminuirQuantidade } from '../../redux/actions/index'; // Ajuste o caminho conforme necessário

function CardProduto({ produto }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const quantidade = useSelector(state => {
    const produtoNoCarrinho = state.carrinho.find(p => p.id === produto.id);
    return produtoNoCarrinho ? produtoNoCarrinho.quantidade : 0;
  });

  const goToDetails = () => {
      history.push(`/produto/${produto.id}`);
  };

  return (
      <div className="card-produto" onClick={goToDetails}>
          <h2>{produto.nome}</h2>
          <img src={produto.imagem} alt={produto.nome} />
          <button onClick={(e) => { e.stopPropagation(); dispatch(diminuirQuantidade(produto.id)); }}>-</button>
          <span>{quantidade}</span>
          <button onClick={(e) => { e.stopPropagation(); dispatch(adicionarAoCarrinho(produto)); }}>+</button>
      </div>
  );
}

export default CardProduto;
