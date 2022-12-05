import { combineReducers } from 'redux';
import dataReducer from './data/dataSlice';
import jsonReducer from './json/jsonSlice';

export default combineReducers({
  data: dataReducer,
  json: jsonReducer,
});
