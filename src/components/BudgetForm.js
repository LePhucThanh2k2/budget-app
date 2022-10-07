import { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddExpense, actAddIncome, actAddItem } from "../store/actions";
import { v4 as uuidv4, v4 } from "uuid";

function BudgetForm() {
  // HOOK, sign
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    sign: 'inc'
  });

  const dispatch = useDispatch();
  // VARIABLE
  let classInput = formData.sign === "inc" ? "" : "red-focus";
  let classButton = formData.sign === "inc" ? "" : "red";
  // FUNCTION
  function handleChange(e) {
    console.log(formData);
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'amount') {
      value = parseInt(value);
    }
    setFormData({ ...formData, [name]: value });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddItem();
    }
  }
  function handleAddItem() {
    if (!formData.description || !formData.amount) {
      alert('please input desc or amount');
      return;
    }

    const item = {
      id: v4(),
      description: formData.description,
      amount: formData.sign === 'inc' ? formData.amount : (-1 * formData.amount),
    };
    dispatch(actAddItem(item));
    document.querySelector(".add__description").focus();
    // RESET FORM
    setFormData({
      description: '',
      amount: 0,
      sign: formData.sign
    })
  }
  // RENDER
  return (
    <div className="add">
      <div className="add__container">
        <select
          className={`add__type ${classInput}`}
          onChange={handleChange}
          name="sign"
        >
          <option value="inc">
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className={`add__description ${classInput}`}
          placeholder="Add description"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
        <input
          type="number"
          className={`add__value ${classInput}`}
          placeholder="Value"
          value={formData.amount}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          name="amount"
        />
        <button className={`add__btn ${classButton}`} onClick={handleAddItem}>
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );
}
export default BudgetForm;
