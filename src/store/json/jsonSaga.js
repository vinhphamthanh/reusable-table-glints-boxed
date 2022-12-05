import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { jsonActions } from './jsonSlice';

function* checkData(action) {
  yield put(jsonActions.checkDataDone(action.payload));
}

export function* checkDataSaga() {
  yield takeLatest(jsonActions.checkDataStart.toString(), checkData);
}
