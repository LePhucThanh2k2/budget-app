import "./main.css";
import Title from "./Title";
import Value from "./Value";
import Income from "./Income";
import Expense from "./Expense";
function Top() {
  return (
    <div className="top">
      <div className="budget">
        <Title month="September" />
        <Value value="+ 10,154,155" />
        <Income />
        <Expense />
      </div>
    </div>
  );
}
export default Top;
