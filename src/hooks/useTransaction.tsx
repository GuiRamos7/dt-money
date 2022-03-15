import { TransactionsContext } from 'context/TransactionsContext';
import { useContext } from 'react';

export const useTransaction = () => {
  const context = useContext(TransactionsContext);

  return context;
};
