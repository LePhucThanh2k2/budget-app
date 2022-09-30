function Expense() {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <div className="item clearfix">
          <div className="item__description">Apartment rent</div>
          <div className="right clearfix">
            <div className="item__value">- 900.00</div>
            <div className="item__percentage">21%</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline" />
              </button>
            </div>
          </div>
        </div>
        <div className="item clearfix">
          <div className="item__description">Grocery shopping</div>
          <div className="right clearfix">
            <div className="item__value">- 435.28</div>
            <div className="item__percentage">10%</div>
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
export default Expense;
