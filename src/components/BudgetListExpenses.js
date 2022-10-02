import Item from "./Item";

function BudgetListExpenses({ listData, totalAmount }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {listData.map((item) => (
          <Item key={item.id} data={item} totalIncome={totalAmount} />
        ))}
      </div>
    </div>
  );
}
export default BudgetListExpenses;
