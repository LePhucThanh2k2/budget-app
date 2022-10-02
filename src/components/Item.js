import { useDispatch, useSelector } from "react-redux";
import formatAmount from "../helpers/formatAmount";
import formatPercent from "../helpers/formatPercent";
import { actDeleteItem } from "../store/actions";

function Item({ data, totalIncome }) {
  const { description, amount, id } = data;
  const dispatch = useDispatch();
  const datas = useSelector((state) => state);
  function handlerDelete() {
    dispatch(actDeleteItem(id));
    console.log(datas);
  }
  return (
    <>
      <div className="item clearfix">
        <div className="item__description">{description}</div>
        <div className="right clearfix">
          <div className="item__value">{formatAmount(amount)}</div>
          {amount < 0 && (
            <div className="item__percentage">
              {formatPercent(totalIncome, amount)}
            </div>
          )}
          <div className="item__delete">
            <button className="item__delete--btn" onClick={handlerDelete}>
              <i className="ion-ios-close-outline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
