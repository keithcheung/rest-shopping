// Main point: bring together all other reducers
//  only resource we have is item reducer, might need other reducers for auth
//  this is a meeting place

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  // what it is identified as in the store?
  item: itemReducer
});
