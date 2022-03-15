export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
