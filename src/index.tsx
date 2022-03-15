import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { createServer, Model } from 'miragejs';

import App from './App';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './context/TransactionsContext';

Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Internet',
          amount: 50,
          type: 'withdraw',
          category: 'Bill',
          createdAt: new Date('2022-01-16'),
        },
        {
          id: 2,
          title: 'Ghost of Tsushima',
          amount: 70,
          type: 'withdraw',
          category: 'Games',
          createdAt: new Date('2022-01-15'),
        },
        {
          id: 3,
          title: 'Salary',
          amount: 5000,
          type: 'deposit',
          category: 'Salary',
          createdAt: new Date('2022-01-05'),
        },
        {
          id: 4,
          title: 'Sushi',
          amount: 44.55,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date('2021-12-31'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
      <GlobalStyle />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
