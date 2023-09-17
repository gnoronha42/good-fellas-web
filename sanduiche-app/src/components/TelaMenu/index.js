import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Adicione o useDispatch
import CardProduto from '../CardProduto';
import { adicionarAoCarrinho } from '../../redux/actions'; // Garanta que este é o caminho correto
import img from '../../assets/logo500.jpg';  

function TelaMenu() {
  const dispatch = useDispatch();
  const produtos = useSelector(state => state.produtos.produtos);

  const handleAddToCart = (produto) => {
    dispatch(adicionarAoCarrinho(produto));
  };

  return (
    <div className="tela-menu">
      <header className='headerMain' >
        <img src={img} alt="Header" />
      </header>
      <div className="lista-produtos">
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={() => handleAddToCart(produto)}
          />
        ))}
      </div>
    </div>
  );
}

export default TelaMenu;
