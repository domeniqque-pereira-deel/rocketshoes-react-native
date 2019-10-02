export function addProductRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addProductSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function updateProductAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateProductAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function removeProductFromCart(id) {
  return {
    type: '@cart/REMOVE_PRODUCT_FROM_CART',
    id,
  };
}
