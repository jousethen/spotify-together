import { combineReducers } from 'redux';
import { playbackReducer } from './playback';
import { roomReducer } from './room';

export default combineReducers({
  room: roomReducer,
  playback: playbackReducer,
});
