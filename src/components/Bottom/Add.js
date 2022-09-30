import { useState } from "react";
function Add() {
  const [valueSelected, setValueSelected] = useState("inc");
  function handleSelected(value) {
    setValueSelected(value);
  }
  const clsRedFocus = valueSelected === "exp" ? "red-focus" : "";
  const clsRed = valueSelected === "exp" ? "red" : "";

  return (
    <div className="add">
      <div className="add__container">
        <select
          className={`add__type ${clsRedFocus}`}
          onChange={(e) => {
            handleSelected(e.target.value);
          }}
        >
          <option value="inc" selected>
            +
          </option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          className={`add__description ${clsRedFocus}`}
          placeholder="Add description"
        />
        <input
          type="number"
          className={`add__value ${clsRedFocus}`}
          placeholder="Value"
        />
        <button className={`add__btn ${clsRed}`}>
          <i className="ion-ios-checkmark-outline" />
        </button>
      </div>
    </div>
  );
}
export default Add;
{
  /* <div class="add">
        <div class="add__container">
            <select class="add__type">
                <option value="inc" selected="">+</option>
                <option value="exp">-</option>
            </select>
            <input type="text" class="add__description" placeholder="Add description">
            <input type="number" class="add__value" placeholder="Value">
            <button class="add__btn"><i class="ion-ios-checkmark-outline"></i></button>
        </div>
    </div> */
}
{
  /* <div class="add">
      <div class="add__container">
          <select class="add__type red-focus">
              <option value="inc">+</option>
              <option value="exp" selected="">-</option>
          </select>
          <input type="text" class="add__description red-focus" placeholder="Add description">
          <input type="number" class="add__value red-focus" placeholder="Value">
          <button class="add__btn red"><i class="ion-ios-checkmark-outline"></i></button>
      </div>
   </div> */
}
