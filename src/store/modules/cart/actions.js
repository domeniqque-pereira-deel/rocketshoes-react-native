export function addProductRequest(productId) {
  return {
    type: '@cart/ADD_PRODUCT_REQUEST',
    productId,
  };
}

export function addProductSuccess(product) {
  return {
    type: '@cart/ADD_PRODUCT_SUCCESS',
    product,
  };
}
