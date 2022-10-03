// Action Type
export const ACT_ADD_INCOME = "ACT_ADD_INCOME";
export const ACT_ADD_EXPENSE = "ACT_ADD_EXPENSE";
export const ACT_DELETE_ITEM = "ACT_DELETE_ITEM";

// Function
export function actAddItem(type, desc, amount) {
  return { type: ACT_ADD_INCOME, payload: { type, desc, amount } };
}

export function actDeleteItem(id) {
  return { type: ACT_DELETE_ITEM, payload: { id } };
}
