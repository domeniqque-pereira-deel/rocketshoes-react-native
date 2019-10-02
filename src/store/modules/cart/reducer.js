import produce from 'immer';

export default function Cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
