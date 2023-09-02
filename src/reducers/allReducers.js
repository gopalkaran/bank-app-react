import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import statementReducer from './statementReducer';

const allReducers = combineReducers({
  balance: balanceReducer,
  statement: statementReducer,
});

export default allReducers;
