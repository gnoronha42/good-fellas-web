import { combineReducers } from 'redux';
import carrinhoReducer from './carrinhoReducer';

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
});

export default rootReducer;
