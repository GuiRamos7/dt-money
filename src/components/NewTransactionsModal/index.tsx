import * as S from './styles';
import closeImg from 'assets/close.svg';
import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';

interface INewTransactionsModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionsModal = ({
  onRequestClose,
  isOpen,
}: INewTransactionsModal) => {
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
          <button type='button'>
            <img src={incomeImg} alt='Received icon' onClick={onRequestClose} />
            <span>Received</span>
          </button>
          <button type='button'>
            <img
              src={outcomeImg}
              alt='Withdraw icon'
              onClick={onRequestClose}
            />
            <span>Withdraw</span>
          </button>
        </S.TransactionTypeContainer>
        <input placeholder='category' />
        <button type='submit'>Register</button>
      </S.Container>
    </S.Modal>
  );
};

export default NewTransactionsModal;
