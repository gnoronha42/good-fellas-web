import React from 'react';
import { useDispatch } from 'react-redux';
import { adicionarAoCarrinho } from './redux/actions';
import TelaMenu from './components/TelaMenu';

const produtos = [
  { id: 1, nome: 'x-bacon', imagem: 'URL_IMAGEM_X-BACON' },
  { id: 2, nome: 'x-salada', imagem: 'URL_IMAGEM_X-SALADA' },
  { id: 3, nome: 'x-tudo', imagem: 'URL_IMAGEM_X-TUDO' },
];

function App() {
  const dispatch = useDispatch();

  return (
    <TelaMenu 
      produtos={produtos} 
      adicionarAoCarrinho={(produto) => dispatch(adicionarAoCarrinho(produto))}
    />
  );
}

export default App;
