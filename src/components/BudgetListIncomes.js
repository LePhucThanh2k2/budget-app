import Item from "./Item";

function BudgetListIncomes({ listData }) {
  return (
    <>
      <div className="income">
        <h2 className="icome__title">Income</h2>
        <div className="income__list">
          {listData.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default BudgetListIncomes;
