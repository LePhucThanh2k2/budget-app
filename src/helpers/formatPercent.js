export default function formatPercent(totalIncome, amount) {
  let formatMoney = amount < 0 ? amount * -1 : amount;
  let percentage = (formatMoney / totalIncome) * 100;
  return `${Math.trunc(percentage)}%`;
}
