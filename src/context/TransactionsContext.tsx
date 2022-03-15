import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from 'services/api';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type ITransactionInput = Omit<ITransaction, 'createdAt' | 'id'>;

interface ITransactionsContextData {
  transactions: Array<ITransaction>;
  createTransaction: (transaction: ITransactionInput) => void;
}

export const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Array<ITransaction>>([]);

  useEffect(() => {
    api.get('transactions').then(({ data }) => {
      setTransactions(data.transactions);
    });
  }, []);

  const createTransaction = (transaction: ITransactionInput) => {
    api.post('/transactions', transaction);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
