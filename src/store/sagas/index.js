import { all } from 'redux-saga/effects';
import productsSagas from './Products';

function* sagas() {
  yield all([
    productsSagas()
  ])
}

export default sagas;