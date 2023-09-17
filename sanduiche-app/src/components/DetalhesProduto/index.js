import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarAoCarrinho } from '../../redux/reducers/carrinhoReducer';
import './styles.css';

function DetalhesProduto(props) {
    const dispatch = useDispatch();
    const { id } = props.match.params;

    const produtos = useSelector(state => state.produtos.produtos);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return <p>Produto não encontrado</p>;
    }

    const handleAddToCart = () => {
        dispatch(adicionarAoCarrinho(produto));
    };
    return (
        <div className="detalhes-produto">
            <h2>{produto.nome}</h2>
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.descricao}</p>
            <h3>Ingredientes:</h3>
            <ul>
               {produto.descricao}
            </ul>
            {/* <h3>Opções de tamanho:</h3>
            <ul>
                {produto.tamanhos && produto.tamanhos.map(tamanho => 
                    <li key={tamanho}>{tamanho}</li>)}
            </ul> */}
            <button onClick={handleAddToCart}>
                Adicionar ao carrinho
            </button>
        </div>
    );
}

export default DetalhesProduto;
