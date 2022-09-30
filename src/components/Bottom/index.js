import "./main.css";
import Add from "./Add";
import Income from "./Income";
import Expense from "./Expense";
function Bottom() {
  return (
    <div className="bottom">
      <Add />

      <div className="container clearfix">
        <Income />
        <Expense />
      </div>
    </div>
  );
}
export default Bottom;
