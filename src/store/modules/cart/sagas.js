import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { addProductSuccess, updateProductAmountSuccess } from './actions';
import { formatPrice } from '../../../utils';

function* addToCart({ productId }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === productId)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  const stock = yield call(api.get, `stock/${productId}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Fora de estoque', 'Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateProductAmountSuccess(productId, amount));
  } else {
    const response = yield call(api.get, `/products/${productId}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };

    yield put(addProductSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
