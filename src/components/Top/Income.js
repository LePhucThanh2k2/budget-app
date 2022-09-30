function Income({ text = "Income", value = "+ 0,000,000", percentage }) {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">{text}</div>
      <div className="right">
        <div className="budget__income--value">{value}</div>
        <div className="budget__income--percentage">{percentage}</div>
      </div>
    </div>
  );
}
export default Income;
