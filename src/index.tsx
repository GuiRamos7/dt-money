import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { createServer } from 'miragejs';

import App from './App';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Playstation Store',
          amount: 400,
          type: 'withdraw',
          category: 'Games',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Salary',
          amount: 5000,
          type: 'deposit',
          category: 'Salary',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Sushi',
          amount: 44.55,
          type: 'withdraw',
          category: 'Games',
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
