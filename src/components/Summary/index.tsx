import incomeImg from 'assets/income.svg';
import totalImg from 'assets/total.svg';
import outcomeImg from 'assets/outcome.svg';
import * as S from './styles';
import { formatMoney } from 'utils';
import { useTransaction } from 'hooks/useTransaction';

const Summary = () => {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <S.Container>
      <S.SummaryItem>
        <header>
          <p>Received</p>
          <img src={incomeImg} alt='Income icon' />
        </header>
        <strong>{formatMoney(summary.deposits)}</strong>
      </S.SummaryItem>
      <S.SummaryItem>
        <header>
          <p>Withdraws</p>
          <img src={outcomeImg} alt='Outcome icon' />
        </header>
        <strong>{formatMoney(summary.withdraws)}</strong>
      </S.SummaryItem>
      <S.SummaryItem highlightBackground>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total icon' />
        </header>
        <strong>{formatMoney(summary.total)}</strong>
      </S.SummaryItem>
    </S.Container>
  );
};

export default Summary;
