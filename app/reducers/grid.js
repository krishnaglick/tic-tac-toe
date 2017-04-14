
const _ = require('lodash');
const gridInit = () => {
  return _.map([0,1,2], () => {
    return _.map([0,1,2], () => {
      return { type: 0 };
    });
  });
};

exports.selectPiece = (state, action) => {
  const { rowNumber = 0, cellNumber = 0, player = 0 } = action;
  state[rowNumber][cellNumber] = { type: player };
  return state;
};

exports.playAgain = () => {
  return gridInit();
};

export default function(state = gridInit(), action = {}) {
  return exports[action.type] ?
    exports[action.type](state, action) :
    state;
}
