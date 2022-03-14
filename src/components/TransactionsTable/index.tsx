import { useEffect, useState } from 'react';
import { api } from 'services/api';
import * as S from './styles';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Array<ITransaction>>([]);

  useEffect(() => {
    api.get('transactions').then(({ data }) => {
      setTransactions(data.transactions);
    });
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'USD',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {' '}
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};

export default TransactionsTable;
