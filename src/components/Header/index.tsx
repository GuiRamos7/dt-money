import logoImg from 'assets/logo.svg';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt='dt money logo' />
        <button>New transaction</button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
