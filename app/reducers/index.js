
import { combineReducers } from 'redux';

import grid from './grid';
import player from './player';

const reducer = combineReducers({
  grid,
  player
});

export default reducer;
