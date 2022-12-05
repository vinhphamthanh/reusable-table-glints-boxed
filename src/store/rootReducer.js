import { combineReducers } from 'redux';
import jsonReducer from './json/jsonSlice';
import dataReducer from './data/dataSlice';

export default combineReducers({
  data: dataReducer,
  json: jsonReducer,
});
