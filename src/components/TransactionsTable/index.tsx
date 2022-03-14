import * as S from './styles';

const TransactionsTable = () => {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PS5</td>
            <td className='withdraw'>- R$ 4000</td>
            <td>Leisure</td>
            <td>20/12/2022</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td className='deposit'>R$ 5000</td>
            <td>Payment</td>
            <td>20/12/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};

export default TransactionsTable;
