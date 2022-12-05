import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataApi } from '../../../api/data';
import { tableActions } from '../tableSlice';
import { generateQueryString } from '../../../utils/http';

function* fetchData(action) {
  try {
    const limit = 25;
    const { payload: { query, type }} = action;
    const queryString = generateQueryString({ ...query, limit });
    const { data, headers } = yield call(fetchDataApi, { query: queryString, type });
    const count = headers['x-total-count'];
    const totalPage = Math.ceil(count / limit)

    yield put(tableActions.fetchDataSuccess({ data, totalPage }))
  } catch (e) {
    yield put(tableActions.fetchDataFailure(e.message))
  }
}

function* dataSaga() {
  yield takeLatest(tableActions.fetchDataStart.toString(), fetchData)
}

export default dataSaga;
