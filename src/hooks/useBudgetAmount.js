import { useSelector } from "react-redux";

export default function useBudgetAmount() {
  let totalIncome = 0;
  let totalExpense = 0;
  const listData = useSelector((state) => state.listData);
  const listDataIncome = listData.filter((item) => item.amount > 0);
  const listDataExpense = listData.filter((item) => item.amount < 0);

  listDataIncome.forEach((item) => {
    totalIncome += item.amount;
  });
  listDataExpense.forEach((item) => {
    totalExpense += item.amount;
  });

  return {
    listData,
    listDataIncome,
    listDataExpense,
    totalIncome,
    totalExpense,
  };
}
