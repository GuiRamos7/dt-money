import { useContext } from 'react';
import incomeImg from 'assets/income.svg';
import totalImg from 'assets/total.svg';
import outcomeImg from 'assets/outcome.svg';
import * as S from './styles';
import { TransactionsContext } from 'context/TransactionsContext';

const Summary = () => {
  const transactions = useContext(TransactionsContext);

  return (
    <S.Container>
      <S.SummaryItem>
        <header>
          <p>Received</p>
          <img src={incomeImg} alt='Income icon' />
        </header>
        <strong>R$1000.00</strong>
      </S.SummaryItem>
      <S.SummaryItem>
        <header>
          <p>Received</p>
          <img src={outcomeImg} alt='Outcome icon' />
        </header>
        <strong>- R$500.00</strong>
      </S.SummaryItem>
      <S.SummaryItem highlightBackground>
        <header>
          <p>Received</p>
          <img src={totalImg} alt='Total icon' />
        </header>
        <strong>R$500.00</strong>
      </S.SummaryItem>
    </S.Container>
  );
};

export default Summary;
