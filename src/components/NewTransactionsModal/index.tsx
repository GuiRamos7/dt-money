import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './styles';
import closeImg from 'assets/close.svg';
import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import { useTransaction } from 'hooks/useTransaction';

interface INewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IFormInput {
  title: string;
  amount: number;
  category: string;
}

const NewTransactionsModal = ({
  onRequestClose,
  isOpen,
}: INewTransactionsModalProps) => {
  const [type, setType] = useState('deposit');
  const { createTransaction } = useTransaction();
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const handleCreateNewTransaction: SubmitHandler<IFormInput> = async (
    data
  ) => {
    await createTransaction({ ...data, type }).then(() => {
      onRequestClose();
      reset();
    });
  };

  return (
    <S.Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      <button type='button' className='react-modal-close-icon'>
        <img src={closeImg} alt='Close modal' onClick={onRequestClose} />
      </button>
      <S.Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Register a transaction</h2>
        <input {...register('title')} placeholder='Name' />
        <input {...register('amount')} placeholder='Value' type='number' />
        <S.TransactionTypeContainer>
          <S.ButtonType
            activeColor='green'
            isActive={type === 'deposit'}
            type='button'
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt='Received icon' />
            <span>Received</span>
          </S.ButtonType>
          <S.ButtonType
            activeColor='red'
            isActive={type === 'withdraw'}
            type='button'
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt='Withdraw icon' />
            <span>Withdraw</span>
          </S.ButtonType>
        </S.TransactionTypeContainer>
        <input {...register('category')} placeholder='category' />
        <button type='submit'>Register</button>
      </S.Container>
    </S.Modal>
  );
};

export default NewTransactionsModal;
