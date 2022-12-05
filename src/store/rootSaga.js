import { dataSaga, searchSaga, clearSearchSaga } from './data/dataSaga';
import { checkDataSaga } from './json/jsonSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([dataSaga(), searchSaga(), clearSearchSaga(), checkDataSaga()])
}
