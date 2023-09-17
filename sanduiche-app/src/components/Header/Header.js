// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css'; // Estilização do header

function Header() {
    const produtosNoCarrinho = useSelector(state => state.carrinho);

    const quantidadeTotal = produtosNoCarrinho.reduce((acc, produto) => acc + produto.quantidade, 0);

    return (
        <div className="header">
            <h2>GOOD_FELLAS BURGER</h2>
            <div className="carrinho-icon">
                🛒 {quantidadeTotal}
            </div>
        </div>
    );
}

export default Header;
