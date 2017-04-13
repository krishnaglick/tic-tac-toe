
const _ = require('lodash');
const gridInit = {};
_.map([0,1,2], (i) => _.map([0,1,2], q => gridInit[`${i},${q}`] = { type: 0, value: null }));

exports.selectPiece = (state, action) => {
  const { rowNumber = 0, cellNumber = 0, player = -1 } = action;
  state[`${rowNumber},${cellNumber}`] = { type: player + 1, value: player + 1 };
  return state;
};


export default function(state = gridInit, action = {}) {
  return exports[action.type] ?
    exports[action.type](state, action) :
    state;
}
