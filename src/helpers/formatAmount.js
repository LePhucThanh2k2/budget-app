export default function formatAmount(amount) {
  const sign = amount > 0 ? "+" : "-";
  const money = amount < 0 ? amount * -1 : amount;
  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  };
  const format = new Intl.NumberFormat("vi-VN", config).format(money);
  return `${sign} ${format.slice(0, format.length - 1)}`;
}
