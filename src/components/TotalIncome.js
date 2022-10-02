import formatAmount from "../helpers/formatAmount";
import useBudgetAmount from "../hooks/useBudgetAmount";
function TotalIncome() {
  const { totalIncome } = useBudgetAmount();
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">{formatAmount(totalIncome)}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
}
export default TotalIncome;
