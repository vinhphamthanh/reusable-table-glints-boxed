import { all } from 'redux-saga/effects';
import {
  clearSearchSaga,
  dataSaga,
  searchSaga,
} from './data/dataSaga';
import { checkDataSaga } from './json/jsonSaga';

export default function* rootSaga() {
  yield all([dataSaga(), searchSaga(), clearSearchSaga(), checkDataSaga()]);
}
