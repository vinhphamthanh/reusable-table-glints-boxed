import { configureStore } from '@reduxjs/toolkit';
import createSageMiddleware from 'redux-saga';
import reducers from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSageMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;




