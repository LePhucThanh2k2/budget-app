import formatAmount from "../helpers/formatAmount";
import formatPercent from "../helpers/formatPercent";
import useBudgetAmount from "../hooks/useBudgetAmount";
function TotalExpense() {
  const { totalExpense, totalIncome } = useBudgetAmount();
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">
          {formatAmount(totalExpense)}
        </div>
        <div className="budget__expenses--percentage">
          {formatPercent(totalIncome, totalExpense)}
        </div>
      </div>
    </div>
  );
}
export default TotalExpense;
