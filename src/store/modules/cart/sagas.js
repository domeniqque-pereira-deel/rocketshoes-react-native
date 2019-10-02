import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { addProductSuccess, updateProductAmountSuccess } from './actions';
import { formatPrice } from '../../../utils';

function* addProduct({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Fora de estoque', 'Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateProductAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };

    yield put(addProductSuccess(data));
  }
}

function* updateProductAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Fora de estoque', 'Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateProductAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addProduct),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateProductAmount),
]);
