import { dataSaga, searchSaga, clearSearchSaga } from './data/saga/dataSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([dataSaga(), searchSaga(), clearSearchSaga()])
}
