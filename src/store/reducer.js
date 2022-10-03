import { ACT_ADD_EXPENSE, ACT_ADD_INCOME, ACT_DELETE_ITEM } from "./actions";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";
let initState = {
  listData: JSON.parse(localStorage.getItem("dataBudget")) || [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_ADD_INCOME:
      const num = action.payload.type === "inc" ? 1 : -1;
      const newData = {
        id: uuidv4(),
        description: action.payload.desc,
        amount: action.payload.amount * num,
      };
      state.listData.push(newData);
      localStorage.setItem("dataBudget", JSON.stringify(state.listData));
      return {
        ...state,
        listData: [...state.listData],
      };

    case ACT_DELETE_ITEM:
      const idItemNeedDelete = action.payload.id;
      state.listData = state.listData.filter(
        (item) => item.id !== idItemNeedDelete
      );
      localStorage.setItem("dataBudget", JSON.stringify(state.listData));
      return {
        ...state,
        listData: [...state.listData],
      };
    default:
      return state;
  }
}
export default reducer;
