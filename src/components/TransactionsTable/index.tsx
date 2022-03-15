import { useContext } from 'react';
import * as S from './styles';
import { TransactionsContext } from 'context/TransactionsContext';
import { formatMoney } from 'utils';

const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);

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
                {formatMoney(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
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
