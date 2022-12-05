import tableReducer from './table/tableSlice'
import { combineReducers } from 'redux';

export default combineReducers({
  data: tableReducer,
})
