import { combineReducers } from 'redux';
import { roomReducer } from './room';

export default combineReducers({
  room: roomReducer
});
