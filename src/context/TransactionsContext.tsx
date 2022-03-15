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
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
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

  const createTransaction = async (TransactionInput: ITransactionInput) => {
    const response = await api.post('/transactions', TransactionInput);
    const { transaction } = response.data;
    setTransactions([transaction, ...transactions]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
