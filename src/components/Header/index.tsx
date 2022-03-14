import logoImg from 'assets/logo.svg';

import * as S from './styles';

interface IHeader {
  handleOpenNewTransactionModal: () => void;
}

const Header = ({ handleOpenNewTransactionModal }: IHeader) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt='dt money logo' />
        <button onClick={handleOpenNewTransactionModal}>New transaction</button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
