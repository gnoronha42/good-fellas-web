import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  
import TelaMenu from './components/TelaMenu';
import DetalhesProduto from './components/DetalhesProduto';
import Carrinho from './components/Carrinho';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Header /> 
        <Switch>
          <Route path="/" exact component={TelaMenu} />
          <Route path="/produto/:id" exact component={DetalhesProduto} />
          <Route path="/carrinho" exact component={Carrinho} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
