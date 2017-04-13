
const _ = require('lodash');
const gridInit = {};
_.map([0,1,2], (i) => _.map([0,1,2], q => gridInit[`${i},${q}`] = { type: 0 }));

export function selectPiece(state = gridInit, { rowNumber = 0, cellNumber = 0, player = -1 } = {}) {
  console.log('sp called');
  state[`${rowNumber},${cellNumber}`] = { type: player + 1 };
  return state;
}
