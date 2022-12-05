import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { fetchDataApi } from '../../api/data';
import { generateQueryString } from '../../utils/http';
import { dataActions } from './dataSlice';

function* fetchData(action) {
  try {
    const limit = 25;
    const {
      payload: {
        query,
        type,
      },
    } = action;
    const queryString = generateQueryString({
      ...query,
      limit,
    });
    const {
      data,
      headers,
    } = yield call(fetchDataApi, {
      query: queryString,
      type,
    });
    const count = headers['x-total-count'];
    const totalPage = Math.ceil(count / limit) ?? 0;

    yield put(dataActions.fetchDataSuccess({
      data,
      totalPage,
    }));
  } catch (e) {
    yield put(dataActions.fetchDataFailure(e.message));
  }
}

export function* dataSaga() {
  yield takeLatest(dataActions.fetchDataStart.toString(), fetchData);
}

function* search(action) {
  try {
    const {
      payload: {
        q,
        type,
      },
    } = action;
    const queryString = generateQueryString({ q }, '');
    const { data } = yield call(fetchDataApi, {
      query: queryString,
      type,
    });
    yield put(dataActions.searchDataSuccess(data));
  } catch (e) {
    yield put(dataActions.fetchDataFailure(e.message));
  }
}

export function* searchSaga() {
  yield takeLatest(dataActions.searchDataStart.toString(), search);
}

function* clearSearch() {
  yield put(dataActions.searchClearDone())
}

export function* clearSearchSaga() {
  yield takeLatest(dataActions.searchClearStart.toString(), clearSearch)
}
