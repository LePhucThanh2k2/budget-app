import BudgetListIncomes from "./BudgetListIncomes";
import BudgetListExpenses from "./BudgetListExpenses";
import { useSelector } from "react-redux";
import useBudgetAmount from "../hooks/useBudgetAmount";
function BudgetList() {
  const { listDataIncome, listDataExpense, totalIncome } = useBudgetAmount();
  return (
    <div className="bottom">
      <div className="container clearfix">
        <BudgetListIncomes listData={listDataIncome} />
        <BudgetListExpenses
          listData={listDataExpense}
          totalAmount={totalIncome}
        />
      </div>
    </div>
  );
}
export default BudgetList;
