import { ACT_ADD_EXPENSE, ACT_ADD_INCOME, ACT_DELETE_ITEM } from "./actions";
import { v4 as uuidv4 } from "uuid";
let initState = {
  listData: [
    {
      id: uuidv4(),
      description: "thu nhap 1",
      amount: 3000000,
    },
    {
      id: uuidv4(),
      description: "thu nhap 2",
      amount: 1000000,
    },
    {
      id: uuidv4(),
      description: "chi tieu 1",
      amount: -100000,
    },
    {
      id: uuidv4(),
      description: "chi tieu 2",
      amount: -250000,
    },
  ],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_ADD_INCOME:
      const newDataIN = {
        id: uuidv4(),
        description: action.payload.desc,
        amount: action.payload.amount,
      };
      initState.listData.push(newDataIN);
      return initState;

    case ACT_ADD_EXPENSE:
      const newDataEX = {
        id: uuidv4(),
        description: action.payload.desc,
        amount: action.payload.amount * -1,
      };
      initState.listData.push(newDataEX);
      return initState;
    case ACT_DELETE_ITEM:
      const idItemNeedDelete = action.payload.id;
      return (initState = {
        ...initState,
        listData: initState.listData.filter(
          (item) => item.id !== idItemNeedDelete
        ),
      });
    default:
      return state;
  }
}
export default reducer;
