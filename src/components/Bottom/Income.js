function Income() {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        <div className="item clearfix">
          <div className="item__description">Salary</div>
          <div className="right clearfix">
            <div className="item__value">+ 2,100.00</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline" />
              </button>
            </div>
          </div>
        </div>
        <div className="item clearfix">
          <div className="item__description">Sold car</div>
          <div className="right clearfix">
            <div className="item__value">+ 1,500.00</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Income;
