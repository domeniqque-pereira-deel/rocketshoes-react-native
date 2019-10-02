import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { addProductSuccess } from './actions';

function* addToCart({ productId }) {
  const response = yield call(api.get, `/products/${productId}`);

  const product = response.data;

  yield put(addProductSuccess(product));
}

export default all([takeLatest('@cart/ADD_PRODUCT_REQUEST', addToCart)]);
