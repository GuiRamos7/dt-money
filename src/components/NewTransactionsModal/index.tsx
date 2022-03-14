import * as S from './styles';
import closeImg from 'assets/close.svg';
import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import { useState } from 'react';

interface INewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionsModal = ({
  onRequestClose,
  isOpen,
}: INewTransactionsModalProps) => {
  const [type, setType] = useState('deposit');

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
      <S.Container>
        <h2>Register a transaction</h2>
        <input placeholder='Name' />
        <input placeholder='Value' type='number' />
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
        <input placeholder='category' />
        <button type='submit'>Register</button>
      </S.Container>
    </S.Modal>
  );
};

export default NewTransactionsModal;
