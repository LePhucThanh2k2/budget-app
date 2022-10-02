// Action Type
export const ACT_ADD_INCOME = "ACT_ADD_INCOME";
export const ACT_ADD_EXPENSE = "ACT_ADD_EXPENSE";
export const ACT_DELETE_ITEM = "ACT_DELETE_ITEM";

// Function
export function actAddIncome(desc, amount) {
  return { type: ACT_ADD_INCOME, payload: { desc, amount } };
}
export function actAddExpense(desc, amount) {
  return { type: ACT_ADD_EXPENSE, payload: { desc, amount } };
}
export function actDeleteItem(id) {
  return { type: ACT_DELETE_ITEM, payload: { id } };
}
