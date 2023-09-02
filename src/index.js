import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';
import { createStore } from 'redux';
import App from './App';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
