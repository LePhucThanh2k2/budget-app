import formatAmount from "../helpers/formatAmount";
import useBudgetAmount from "../hooks/useBudgetAmount";

function TotalAmount() {
  const { totalIncome, totalExpense } = useBudgetAmount();
  return (
    <div className="budget__value">
      {formatAmount(totalExpense + totalIncome)}
    </div>
  );
}
export default TotalAmount;
