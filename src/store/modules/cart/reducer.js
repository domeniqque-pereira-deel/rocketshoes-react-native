import produce from 'immer';

export default function Cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });
    default:
      return state;
  }
}
