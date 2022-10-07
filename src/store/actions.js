// Action Type
export const ACT_ADD_INCOME = "ACT_ADD_INCOME";
export const ACT_ADD_EXPENSE = "ACT_ADD_EXPENSE";
export const ACT_DELETE_ITEM = "ACT_DELETE_ITEM";

// Function
export function actAddItem(item) {
  return { type: ACT_ADD_INCOME, payload: { item } };
}

export function actDeleteItem(id) {
  return { type: ACT_DELETE_ITEM, payload: { id } };
}
