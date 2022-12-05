import tableReducer from './data/reducer/dataSlice'
import { combineReducers } from 'redux';

export default combineReducers({
  data: tableReducer,
})
