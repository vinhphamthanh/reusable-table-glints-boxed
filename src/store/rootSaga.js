import dataSaga from './table/sagas/dataSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([dataSaga()])
}
