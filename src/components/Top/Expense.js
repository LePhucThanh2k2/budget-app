function Expense({
  text = "Expenses",
  value = "- 0,000,000",
  percentage = "0%",
}) {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">{text}</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">{value}</div>
        <div className="budget__expenses--percentage">{percentage}</div>
      </div>
    </div>
  );
}
export default Expense;
