
const _ = require('lodash');
const gridInit = {};
_.map([0,1,2], (i) => _.map([0,1,2], q => gridInit[`${i},${q}`] = { type: 0, value: null }));

export function selectPiece(state = gridInit, { rowNumber = 0, cellNumber = 0, player = -1 } = {}) {
  state[`${rowNumber},${cellNumber}`] = { type: player + 1, value: player + 1 };
  return state;
}
