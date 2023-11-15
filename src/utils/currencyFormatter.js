const currency = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});
export const currencyFormatter = (number) => {
  return currency.format(number);
};
