export function addProductRequest(productId) {
  return {
    type: '@cart/ADD_REQUEST',
    productId,
  };
}

export function addProductSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function updateProductAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
