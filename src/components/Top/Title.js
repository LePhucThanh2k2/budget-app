function Title({ content = " Available Budget in", month = "%Month%" }) {
  return (
    <div className="budget__title">
      {content} <span className="budget__title--month">{month}</span>:
    </div>
  );
}
export default Title;
