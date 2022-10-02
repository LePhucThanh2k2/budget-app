import { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddExpense, actAddIncome } from "../store/actions";

function BudgetForm() {
  // HOOK
  const [valueSelect, setValueSelect] = useState("inc");
  const [valueDesc, setValueDesc] = useState("");
  const [valueAmount, setValueAmount] = useState("");
  const dispatch = useDispatch();
  // VARIABLE
  let classInput = valueSelect === "inc" ? "" : "red-focus";
  let classButton = valueSelect === "inc" ? "" : "red";
  // FUNCTION
  function handleSelect(e) {
    setValueSelect(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddItem();
    }
  }
  function handleInputDesc(e) {
    setValueDesc(e.target.value);
  }
  function handleInputValue(e) {
    setValueAmount(parseInt(e.target.value));
  }
  function handleAddItem() {
    if (valueSelect === "inc") {
      dispatch(actAddIncome(valueDesc, valueAmount));
    } else {
      dispatch(actAddExpense(valueDesc, valueAmount));
    }
    // RESET FORM
    setValueDesc("");
    setValueAmount("");
  }
  // RENDER
  return (
    <div className="add">
      <div className="add__container">
        <select
          className={`add__type ${classInput}`}
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value="inc" selected>
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className={`add__description ${classInput}`}
          placeholder="Add description"
          value={valueDesc}
          onChange={(e) => handleInputDesc(e)}
        />
        <input
          type="number"
          className={`add__value ${classInput}`}
          placeholder="Value"
          value={valueAmount}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleInputValue(e)}
        />
        <button className={`add__btn ${classButton}`} onClick={handleAddItem}>
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );
}
export default BudgetForm;
