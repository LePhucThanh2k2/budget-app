import { ACT_ADD_EXPENSE, ACT_ADD_INCOME, ACT_DELETE_ITEM } from "./actions";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";
let initState = {
  listData: JSON.parse(localStorage.getItem("dataBudget")) || [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_ADD_INCOME:
      const newState = {...state, listData: [...state.listData, action.payload.item]};
      localStorage.setItem("dataBudget", JSON.stringify(newState.listData));
      return newState;

    case ACT_DELETE_ITEM:
      const idItemNeedDelete = action.payload.id;
      const newListData = state.listData.filter(
        (item) => item.id !== idItemNeedDelete
      );
      localStorage.setItem("dataBudget", JSON.stringify(newListData));
      return {
        ...state,
        listData: newListData,
      };
    default:
      return state;
  }
}
export default reducer;
