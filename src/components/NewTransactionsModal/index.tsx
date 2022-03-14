import * as S from './styles';
import closeImg from 'assets/close.svg';

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
      <button type='button'>
        <img src={closeImg} alt='Close modal' onClick={onRequestClose} />
      </button>
      <S.Container>
        <h2>Register a transaction</h2>
        <input placeholder='Name' />
        <input placeholder='Value' type='number' />
        <input placeholder='category' />
        <button type='submit'>Register</button>
      </S.Container>
    </S.Modal>
  );
};

export default NewTransactionsModal;
